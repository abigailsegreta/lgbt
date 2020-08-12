function setFlagSize(flag) {
    const baseFlagHeight = 300;
    flag.setAttribute('height', baseFlagHeight);
    flag.setAttribute('width', parseFloat(_getVal('width')) * baseFlagHeight);
}

function drawBG(flag) {
    const type = _getVal('type');
    const height = flag.getAttribute('height');
    const width = flag.getAttribute('width');
    flag.setAttribute('viewBox', `0 0 ${width} ${height}`)

    switch (type) {
        case 'pride':
            for (const slice of _cascadeColorFlag(height, width, ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'])) {
                flag.appendChild(slice);
            }
            break;
        case 'pride-historic':
            for (const slice of _cascadeColorFlag(height, width, ['#ff69b4', '#ff0000', '#ff8e00', '#ff0', '#008e00', '#00c0c0', '#400098', '#8e008e'])) {
                flag.appendChild(slice);
            }
            break;
        case 'pride-philly':
            for (const slice of _cascadeColorFlag(height, width, ['#000', '#784F17', '#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'])) {
                flag.appendChild(slice);
            }
            break;
        case 'bisexual':
            for (const slice of _cascadeColorFlag(height, width, ['#d60270', '#d60270', '#9b4f96', '#0038a8', '#0038a8'])) {
                flag.appendChild(slice);
            }
            break;
        case 'bipoc-trans-rainbow':
            for (const slice of _cascadeColorFlag(height, width, ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'])) {
                flag.appendChild(slice);
            }

            const black = {
                d: "M0 -100 L 250 150 L0 400 Z",
                fill: '#000000',
                stroke: "none",
                transform: "translate(30 0)"
            }

            const brown = {
                d: "M0 -100 L 250 150 L0 400 Z",
                fill: '#613914',
                stroke: "none",
                transform: "translate(-20 0)"
            }

            const blue = {
                d: "M0 -100 L 250 150 L0 400 Z",
                fill: '#74d8ef',
                stroke: "none",
                transform: "translate(-70 0)"
            }

            const pink = {
                d: "M0 -100 L 250 150 L0 400 Z",
                fill: '#ffb0c9',
                stroke: "none",
                transform: "translate(-120 0)"
            }

            const white = {
                d: "M0 -100 L 250 150 L0 400 Z",
                fill: '#ffffff',
                stroke: "none",
                transform: "translate(-170 0)"
            }

            flag.appendChild(_genGenericSVG('path', black))
            flag.appendChild(_genGenericSVG('path', brown))
            flag.appendChild(_genGenericSVG('path', blue))
            flag.appendChild(_genGenericSVG('path', pink))
            flag.appendChild(_genGenericSVG('path', white))
            break;
        case 'asexual':
            for (const slice of _cascadeColorFlag(height, width, ['#000000', '#a3a3a3', '#ffff', '#800080'])) {
                flag.appendChild(slice);
            }
            break;
        case 'intersex':
            flag.appendChild(_genSVGRect('#FFD800', height, width));
            const circle = {
                cx: width / 2,
                cy: height / 2,
                r: .25 * height,
                fill: 'none',
                'stroke-width': 25,
                stroke: '#7902aa'
            }
            flag.appendChild(_genGenericSVG('circle', circle))
            break;
        case 'lesbian':
            for (const slice of _cascadeColorFlag(height, width, ['#A40061', '#B75592', '#D063A6', '#EDEDEB', '#E4ACCF', '#C54E54', '#8A1E04'])) {
                flag.appendChild(slice);
            }
            break;
        case 'nonbinary':
            for (const slice of _cascadeColorFlag(height, width, ['#fcf434', '#fcfcfc', '#9c5cd4', '#2c2c2c'])) {
                flag.appendChild(slice);
            }
            break;
        case 'pansexual':
            for (const slice of _cascadeColorFlag(height, width, ['#ff218c', '#ffd800', '#21b1ff'])) {
                flag.appendChild(slice);
            }
            break;
        case 'transgender':
            for (const slice of _cascadeColorFlag(height, width, ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'])) {
                flag.appendChild(slice);
            }
            break;
        case 'agender':
            for (const slice of _cascadeColorFlag(height, width, ['#000000', '#b9b9b9', '#FFFFFF', '#b8f483', '#FFFFFF', '#b9b9b9', '#000000'])) {
                flag.appendChild(slice);
            }
            break;
        case 'aromantic':
            for (const slice of _cascadeColorFlag(height, width, ['#3da542', '#a8d377', '#fefefe', '#a9a9a9', '#000000'])) {
                flag.appendChild(slice);
            }
            break;
        case 'genderfluid':
            for (const slice of _cascadeColorFlag(height, width, ['#ff75a2', '#ffffff', '#be18d6', '#000000', '#333ebd'])) {
                flag.appendChild(slice);
            }
            break;
        case 'genderqueer':
            for (const slice of _cascadeColorFlag(height, width, ['#b57edc', '#ffffff', '#4a8123'])) {
                flag.appendChild(slice);
            }
            break;
        case 'polysexual':
            for (const slice of _cascadeColorFlag(height, width, ['#f61cb9', '#07d569', '#1c92f6'])) {
                flag.appendChild(slice);
            }
            break;
        case 'leather':
            for (const slice of _cascadeColorFlag(height, width, ['#000000', '#2a2a7f', '#000000', '#2a2a7f', '#ffffff', '#2a2a7f','#000000', '#2a2a7f', '#000000'])) {
                flag.appendChild(slice);
            }

            const leather_path = {
                d: "M58 17C52 7 42 0 30 0 13 0 0 13 0 30c0 33 18 38 58 76 40-38 58-43 58-76 0-17-13-30-30-30-12 0-22 7-28 17z",
                fill: '#e70039',
                stroke: "#000000",
                "stroke-width": .25,
                transform: "translate(20 65) rotate(-38 6.888 .156)"
            }
            flag.appendChild(_genGenericSVG('path', leather_path))
            break;
        case 'polyamorous':
            for (const slice of _cascadeColorFlag(height, width, ['#0000ff', '#ff0000', '#000000'])) {
                flag.appendChild(slice);
            }

            const polyamorous_path = {
                d: "M130.2 112.8c0-2.6.8-4.8 1.5-7.5l6-21c.5-1.8.3-2.7-1.9-2.7-6.6 0-9.9 1.8-12.3 9-.2.5-.2 1.4-1 1.4s-1.4-1.3-1.4-3.8c0-5.3 3.8-12.9 16.3-12.9 4.4 0 9.1.3 13.5.6 3.4.2 6.5.4 9.3.4 2.7 0 4.6-.9 6-1.6 1.1-.7 1.7-1.2 2.2-1.2 1 0 1.2.8 1.2 3 0 2.8-2.1 6.4-3.6 6.4-2.6 0-5.7-.4-7-.4-2.1 0-2.9.3-3.3 3-.4 2.8-2.3 14.5-2.3 18.4 0 2.4 1.7 3.4 3.6 3.5 1.1.1 2.3-.1 3.3-.5.8-.3 1.3-.6 1.5-.6.9 0 1 .5 1 1.5 0 3.3-2.2 8.3-7 8.3-3.3 0-6.2-3.2-6.2-9.6 0-4.8 2.5-18.6 2.5-21.7 0-1.2-.6-2.4-1.5-2.4l-7.5-.3c-1.3-.1-2 .5-2.4 2-3 11.3-3.8 18.5-4 23.2-.1 3.2.2 5.2.4 6.4.3 1.7.4 2.6-1 2.6-1.3 0-5.9-2-5.9-3.5z",
                fill: '#ff0',
                transform: "translate(-40 -40) scale(1.8)"
            }
            flag.appendChild(_genGenericSVG('path', polyamorous_path))
            break;
        case 'aromantic':
            for (const slice of _cascadeColorFlag(height, width, ['#3ca542', '#a8d377', '#ffffff', '#a9a9a9', '#000000'])) {
                flag.appendChild(slice);
            }
            break;
        case 'gaymale':
            for (const slice of _cascadeColorFlag(height, width, ['#078e70', '#26ceaa', '#98e8c1', '#ffffff', '#7bade2', '#5049cb', '#3d1a78'])) {
                flag.appendChild(slice);
            }
            break;
        default:
            alert(`flag '${type}' not implemented`)
    }
}

function drawDecal(flag) {
    const type = _getVal('decal');

    switch (type) {
        case 'none':
            break;
        case 'rifle':
            // only update the values on initial load of decal type
            // otherwise we fight the user for the slider
            // initial load is indicated by the decal dropdown being in focus
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 2);
                _setVal('decal_size', 45);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.rifle));
            break;
        case 'shotgun':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 3);
                _setVal('decal_size', 35);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.shotgun));
            break;
        case 'tacshotgun':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', .1);
                _setVal('decal_size', 43);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.tacshotgun));
            break;
        case 'coachgun':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0);
                _setVal('decal_size', 32);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.coachgun));
            break;
        case 'pistol':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 4);
                _setVal('decal_size', 50);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.pistol));
            break;
        case 'revolver':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 3.5);
                _setVal('decal_size', 50);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.revolver));
            break;
        case 'raygun':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0);
                _setVal('decal_size', 53);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.raygun));
            break;
        case 'cannabis':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 5);
                _setVal('decal_size', 55);
                _setVal('decal_color', '#198700')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.cannabis));
            break;
        case 'fist':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 10);
                _setVal('decal_size', 50);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.fist));
            break;
        case 'anarchy':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0.3);
                _setVal('decal_size', 53);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.anarchy));
            break;
        case 'boot':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.2);
                _setVal('decal_size', 67);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.boot));
            break;
        case 'whip':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.2);
                _setVal('decal_size', 53);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.whip));
            break;
        case 'ridingcrop':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0.6);
                _setVal('decal_size', 29);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.ridingcrop));
            break;
        case 'handcuffs':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0);
                _setVal('decal_size', 75);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.handcuffs));
            break;
        case 'middlefinger':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.6);
                _setVal('decal_size', 70);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.middlefinger));
            break;
        case 'vibrator':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.2);
                _setVal('decal_size', 59);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.vibrator));
            break;
        case 'penis':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.2);
                _setVal('decal_size', 59);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.penis));
            break;
        case 'vagina':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.2);
                _setVal('decal_size', 71);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.vagina));
            break;
        case 'heart':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 10);
                _setVal('decal_size', 57);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.heart));
            break;
        case 'vulcansalute':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.5);
                _setVal('decal_size', 57);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.vulcansalute));
            break;
        case 'starfleet':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.5);
                _setVal('decal_size', 55);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.starfleet));
            break;
        case 'antifa':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 0);
                _setVal('decal_size', 55);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.antifa));
            break;
        case 'skullcrossbones':
            if (document.activeElement.id == 'decal'){
                _setVal('decal_outline', 1.6);
                _setVal('decal_size', 55);
                _setVal('decal_color', '#000000')
            }
            flag.appendChild(_genericDecalPosition(flag, decals.skullcrossbones));
            break;
        default:
            alert(`decal '${type}' not implemented`)
    }
}

function drawBorder(flag) {
    let borderThickness = _getVal('border_thickness');
    let borderColor = _getVal('border_color');
    const border_path = {
        width: flag.getAttribute('width'),
        height: "300",
        fill: "none",
        style: `stroke-width: ${borderThickness}; stroke: ${borderColor}`
    }
    flag.appendChild(_genGenericSVG('rect', border_path))
}

function drawText(flag) {
    const texts = {
        top: {
            text: _getVal('top_text'),
            size: parseInt(_getVal('top_text_size')),
            position: parseInt(_getVal('top_text_posn')),
            color: _getVal('top_text_color'),
            outline: parseInt(_getVal('top_text_outline')),
            letterspacing: parseInt(_getVal('top_text_letterspace'))
        },
        bottom: {
            text: _getVal('bottom_text'),
            size: parseInt(_getVal('bottom_text_size')),
            position: parseInt(_getVal('bottom_text_posn')),
            color: _getVal('bottom_text_color'),
            outline: parseInt(_getVal('bottom_text_outline')),
            letterspacing: parseInt(_getVal('bottom_text_letterspace'))
        }
    }

    flag.appendChild(_genText(texts.top));
    flag.appendChild(_genText(texts.bottom));
}

let previousText;
function setTitle() {
    const text = _getVal('top_text').toLowerCase() + ' ' + _getVal('bottom_text').toLowerCase();

    if (!previousText) {
        previousText = text;
    }

    if (text != previousText) {
        if (text.length > 1) {
            document.title = previousText = text;
        } else {
            document.title = previousText = 'be gay do crimes';
        }
    }
}

function renderFlag() {
    _loadShareLinkIfExists();

    const flag = document.getElementById('flag');
    _emptyFlag(flag);
    setFlagSize(flag);
    drawBG(flag);
    drawBorder(flag);
    drawDecal(flag);
    drawText(flag);

    setTitle();

    _generateDownloadLinks(flag);
    _generateShareLink();
}

renderFlag();
