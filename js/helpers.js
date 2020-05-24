function _getVal(id_name) {
    const elem = document.getElementById(id_name);
    if (!elem) {
        console.error(`_getVal: cannot retrieve value of unknown element "${id_name}"`);
        return null;
    }
    return elem.value;
}

function _setVal(id_name, val) {
    const elem = document.getElementById(id_name);
    if (!elem) {
        console.error(`_setVal: cannot set value of unknown element "${id_name}"`);
        return null;
    }

    elem.value = val;
}

// object of attributes
function _genGenericSVG(type, attribute_list) {
    const obj = document.createElementNS("http://www.w3.org/2000/svg", type);
    for (attr in attribute_list) {
        obj.setAttribute(attr, attribute_list[attr]);
    }
    return obj;
}

function _genSVGRect(fill, height, width) {
    return _genGenericSVG('rect', {
        fill,
        height,
        width
    });
}

// fill color, array of [x, y]
function _genSVGPoly(fill, points) {
    return _genGenericSVG('rect', {
        fill,
        points: points.map(coords => coords.join(',')).join(' ')
    });
}

// height, width, array of colors top to bottom
function _cascadeColorFlag(height, width, colors) {
    const slice_size = height / colors.length;
    const slices = []
    for (let i = colors.length; i > 0; i--) {
        slices.push(_genSVGRect(colors[i - 1], slice_size * i, width));
    }
    return slices;
}

// attribs is objs of text, size in px, position in y%, color, outline thickness in px
function _genText(attribs) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    text.setAttribute('x', '50%');
    text.setAttribute('y', `${attribs.position}%`);
    text.style.textAnchor = 'middle';
    text.style.fontSize = `${attribs.size}px`;
    text.style.fill = attribs.color;
    text.style.stroke = 'black';
    text.style.strokeWidth = `${attribs.outline}px`;
    text.style.textTransform = 'uppercase';
    text.style.letterSpacing = `${attribs.letterspacing}px`;
    text.setAttribute('font-family', 'Arial Black, Arial Bold, Gadget, sans-serif');
    text.setAttribute('font-weight', 900);
    text.setAttribute('class', 'flag-text');
    text.innerHTML = attribs.text;

    return text;
}

function _emptyFlag(flag) {
    while (flag.lastChild) {
        flag.removeChild(flag.lastChild);
    }
}

function _objFromSrc(src) {
    let frag = new DOMParser().parseFromString(src, 'image/svg+xml');
    return frag.documentElement;
}

function _genericDecalPosition(flag, decal_src) {
    let decal = _objFromSrc(decal_src);
    let height = (_getVal('decal_size') / 100) * flag.getAttribute('height');
    let fill_color = _getVal('decal_color');
    let stroke_color = _getVal('decal_outline_color');
    let stroke_width = _getVal('decal_outline');

    let height_width_ratio = decal.getAttribute('width') / decal.getAttribute('height');

    decal.setAttribute('height', height);
    decal.setAttribute('width', height * height_width_ratio);
    decal.style.fill = fill_color;
    decal.style.stroke = stroke_color;
    decal.style.strokeWidth = stroke_width;

    // put the midpoint of the decal at midpoint of image
    let v_position = (flag.getAttribute('height') / 2) - (height / 2);
    let h_position = (flag.getAttribute('width') / 2) - (height * height_width_ratio / 2);
    decal.setAttribute('y', v_position);
    decal.setAttribute('x', h_position);

    return decal;
}

function _generateDownloadLinks(flag) {
    const png_size_multiplier = 5;
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(flag);

    // SVG;  https://stackoverflow.com/a/23218877
    // add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    // add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    // convert svg source to URI data scheme.
    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    // set url value to a element's href attribute.
    svg_link = document.getElementById("svg_link");
    svg_link.href = url;
    svg_link.setAttribute('download', `flag-${new Date().getTime()}`)

    // PNG; https://stackoverflow.com/a/45334496
    let canvas = document.createElement("canvas");
    canvas.height = flag.getAttribute('height') * png_size_multiplier;
    canvas.width = flag.getAttribute('width') * png_size_multiplier;
    let img = new Image();

    // make it base64
    let svg64 = btoa(source);
    let b64Start = 'data:image/svg+xml;base64,';

    // prepend a "header"
    let image64 = b64Start + svg64;
    img.src = image64

    // there's some weird race condition here where sometimes the canvas renders empty
    // I suspect that the image is not loaded before we author it to the canvas
    // regardless, this works
    setTimeout(function() {
        canvas.getContext('2d').drawImage(img, 0, 0, flag.getAttribute('width') * png_size_multiplier, flag.getAttribute('height') * png_size_multiplier);

        // set url value to a element's href attribute.
        svg_link = document.getElementById("png_link");
        svg_link.href = canvas.toDataURL();
        svg_link.setAttribute('download', `flag-${new Date().getTime()}`)
    }.bind(this), 50)
}

function _generateShareLink() {
    let elements = document.querySelectorAll('.capture');
    let saved_values = {}
    elements.forEach(elem => saved_values[elem.id] = elem.value);

    let appendable_url = `${document.location.protocol}//${document.location.host}/`
    document.getElementById('share-link').href = `${appendable_url}#${btoa(JSON.stringify(saved_values))}`;
}

function _loadShareLinkIfExists() {
    if (document.location.hash) {
        let data;
        try {
            data = JSON.parse(atob(document.location.hash.substring(1)));
        } catch (error) {
            console.error('Share link parse error: ', atob(document.location.hash.substring(1)))
            document.location.hash = '';
            return;
        }

        document.location.hash = '';
        for (id in data) {
            console.debug(`Setting ${id} to ${data[id]}`);
            _setVal(id, data[id]);
        }
    }
}
