// Properties - https://www.w3.org/Style/CSS/all-properties
// Updated - 30 Jun 2018
//
// let grouped = _.groupBy(properties, 'title')
// grouped = _.map(grouped, (v, k) => ({
//   specification: k,
//   use: false,
//   properties: _.uniq(v.map(p => _.camelCase(p.property)))
// }))
// grouped = _.sortBy(grouped, v => v.specification)

// const props = _.uniq(_.flatten(grouped.filter(g => g.use).map(g => g.properties))).sort()

const grouped = [
  {
     "specification": "CSS 2.1",
     "use": true,
     "properties": [
        "azimuth",
        "background",
        "backgroundAttachment",
        "backgroundColor",
        "backgroundImage",
        "backgroundPosition",
        "backgroundRepeat",
        "border",
        "borderBottom",
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderCollapse",
        "borderColor",
        "borderLeft",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRight",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderSpacing",
        "borderStyle",
        "borderTop",
        "borderTopColor",
        "borderTopStyle",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "captionSide",
        "clear",
        "clip",
        "color",
        "content",
        "counterIncrement",
        "counterReset",
        "cue",
        "cueAfter",
        "cueBefore",
        "cursor",
        "direction",
        "display",
        "elevation",
        "emptyCells",
        "float",
        "font",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "height",
        "left",
        "letterSpacing",
        "lineHeight",
        "listStyle",
        "listStyleImage",
        "listStylePosition",
        "listStyleType",
        "margin",
        "marginBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "orphans",
        "outline",
        "outlineColor",
        "outlineStyle",
        "outlineWidth",
        "overflow",
        "padding",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "pageBreakAfter",
        "pageBreakBefore",
        "pageBreakInside",
        "pause",
        "pauseAfter",
        "pauseBefore",
        "pitch",
        "pitchRange",
        "playDuring",
        "position",
        "quotes",
        "richness",
        "right",
        "speak",
        "speakHeader",
        "speakNumeral",
        "speakPunctuation",
        "speechRate",
        "stress",
        "tableLayout",
        "textAlign",
        "textDecoration",
        "textIndent",
        "textTransform",
        "top",
        "unicodeBidi",
        "verticalAlign",
        "visibility",
        "voiceFamily",
        "volume",
        "whiteSpace",
        "widows",
        "width",
        "wordSpacing",
        "zIndex"
     ]
  },
  {
     "specification": "CSS Animations Level 1",
     "use": true,
     "properties": [
        "animation",
        "animationDelay",
        "animationDirection",
        "animationDuration",
        "animationFillMode",
        "animationIterationCount",
        "animationName",
        "animationPlayState",
        "animationTimingFunction"
     ]
  },
  {
     "specification": "CSS Backgrounds and Borders Module Level 3",
     "use": true,
     "properties": [
        "background",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundColor",
        "backgroundImage",
        "backgroundOrigin",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundSize",
        "border",
        "borderBottom",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderColor",
        "borderImage",
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
        "borderLeft",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRadius",
        "borderRight",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderStyle",
        "borderTop",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopStyle",
        "borderTopWidth",
        "borderWidth",
        "boxShadow"
     ]
  },
  {
     "specification": "CSS Basic User Interface Module Level 3 (CSS3 UI)",
     "use": true,
     "properties": [
        "appearance",
        "boxSizing",
        "caret",
        "caretColor",
        "caretShape",
        "cursor",
        "navDown",
        "navLeft",
        "navRight",
        "navUp",
        "outline",
        "outlineColor",
        "outlineOffset",
        "outlineStyle",
        "outlineWidth",
        "resize",
        "textOverflow",
        "userSelect"
     ]
  },
  {
     "specification": "CSS Basic User Interface Module Level 4",
     "use": false,
     "properties": [
        "appearance",
        "boxSizing",
        "caret",
        "caretColor",
        "caretShape",
        "cursor",
        "navDown",
        "navLeft",
        "navRight",
        "navUp",
        "outline",
        "outlineColor",
        "outlineOffset",
        "outlineStyle",
        "outlineWidth",
        "resize",
        "textOverflow",
        "userSelect"
     ]
  },
  {
     "specification": "CSS Box Alignment Module Level 3",
     "use": true,
     "properties": [
        "alignContent",
        "alignItems",
        "alignSelf",
        "columnGap",
        "gap",
        "justifyContent",
        "justifyItems",
        "justifySelf",
        "placeContent",
        "placeItems",
        "placeSelf",
        "rowGap"
     ]
  },
  {
     "specification": "CSS Cascading and Inheritance Level 3",
     "use": false,
     "properties": [
        "all"
     ]
  },
  {
     "specification": "CSS Cascading and Inheritance Level 4",
     "use": false,
     "properties": [
        "all"
     ]
  },
  {
     "specification": "CSS Color Module Level 3",
     "use": true,
     "properties": [
        "color",
        "opacity"
     ]
  },
  {
     "specification": "CSS Color Module Level 4",
     "use": false,
     "properties": [
        "color",
        "colorAdjust",
        "opacity"
     ]
  },
  {
     "specification": "CSS Containment Module Level 1",
     "use": false,
     "properties": [
        "contain"
     ]
  },
  {
     "specification": "CSS Custom Properties for Cascading Variables Module Level 1",
     "use": false,
     "properties": [
        "--*"
     ]
  },
  {
     "specification": "CSS Display Module Level 3",
     "use": false,
     "properties": [
        "display"
     ]
  },
  {
     "specification": "CSS Exclusions Module Level 1",
     "use": false,
     "properties": [
        "wrapFlow",
        "wrapThrough"
     ]
  },
  {
     "specification": "CSS Fill and Stroke Module Level 3",
     "use": false,
     "properties": [
        "fill",
        "fillBreak",
        "fillColor",
        "fillImage",
        "fillOpacity",
        "fillOrigin",
        "fillPosition",
        "fillRepeat",
        "fillRule",
        "fillSize",
        "stroke",
        "strokeAlign",
        "strokeBreak",
        "strokeColor",
        "strokeDashCorner",
        "strokeDashJustify",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeImage",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeOrigin",
        "strokePosition",
        "strokeRepeat",
        "strokeSize",
        "strokeWidth"
     ]
  },
  {
     "specification": "CSS Flexible Box Layout Module Level 1",
     "use": true,
     "properties": [
        "alignContent",
        "alignItems",
        "alignSelf",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexFlow",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "justifyContent",
        "order"
     ]
  },
  {
     "specification": "CSS Fonts Module Level 3",
     "use": false,
     "properties": [
        "font",
        "fontFamily",
        "fontFeatureSettings",
        "fontKerning",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontSynthesis",
        "fontVariant",
        "fontVariantCaps",
        "fontVariantEastAsian",
        "fontVariantLigatures",
        "fontVariantNumeric",
        "fontVariantPosition",
        "fontWeight"
     ]
  },
  {
     "specification": "CSS Fonts Module Level 4",
     "use": false,
     "properties": [
        "font",
        "fontFamily",
        "fontLanguageOverride",
        "fontMaxSize",
        "fontMinSize",
        "fontOpticalSizing",
        "fontPalette",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontSynthesis",
        "fontVariantAlternates",
        "fontVariantEmoji",
        "fontVariationSettings",
        "fontWeight"
     ]
  },
  {
     "specification": "CSS Fragmentation Module Level 3",
     "use": false,
     "properties": [
        "boxDecorationBreak",
        "breakAfter",
        "breakBefore",
        "breakInside",
        "orphans",
        "widows"
     ]
  },
  {
     "specification": "CSS Generated Content Module Level 3",
     "use": false,
     "properties": [
        "bookmarkLabel",
        "bookmarkLevel",
        "bookmarkState",
        "content",
        "quotes",
        "stringSet"
     ]
  },
  {
     "specification": "CSS Generated Content for Paged Media Module",
     "use": false,
     "properties": [
        "bookmarkLabel",
        "bookmarkLevel",
        "bookmarkState",
        "footnoteDisplay",
        "footnotePolicy",
        "running",
        "stringSet"
     ]
  },
  {
     "specification": "CSS Grid Layout Module Level 1",
     "use": true,
     "properties": [
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnStart",
        "gridRow",
        "gridRowEnd",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
     ]
  },
  {
     "specification": "CSS Image Values and Replaced Content Module Level 3",
     "use": true,
     "properties": [
        "imageOrientation",
        "imageResolution",
        "objectFit",
        "objectPosition"
     ]
  },
  {
     "specification": "CSS Image Values and Replaced Content Module Level 4",
     "use": false,
     "properties": [
        "imageResolution",
        "objectFit"
     ]
  },
  {
     "specification": "CSS Inline Layout Module Level 3",
     "use": false,
     "properties": [
        "alignmentBaseline",
        "baselineShift",
        "dominantBaseline",
        "initialLetter",
        "initialLetterAlign",
        "initialLetterWrap",
        "verticalAlign"
     ]
  },
  {
     "specification": "CSS Intrinsic & Extrinsic Sizing Module Level 3",
     "use": false,
     "properties": [
        "boxSizing",
        "height",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "width"
     ]
  },
  {
     "specification": "CSS Line Grid Module Level 1",
     "use": false,
     "properties": [
        "boxSnap",
        "lineGrid",
        "lineSnap"
     ]
  },
  {
     "specification": "CSS Lists and Counters Module Level 3",
     "use": false,
     "properties": [
        "counterIncrement",
        "counterReset",
        "counterSet",
        "listStyle",
        "listStyleImage",
        "listStylePosition",
        "listStyleType",
        "markerSide"
     ]
  },
  {
     "specification": "CSS Logical Properties and Values Level 1",
     "use": false,
     "properties": [
        "backgroundImageTransform",
        "blockSize",
        "borderBlock",
        "borderBlockColor",
        "borderBlockEnd",
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth",
        "borderBlockStart",
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth",
        "borderBlockStyle",
        "borderBlockWidth",
        "borderImageTransform",
        "borderInline",
        "borderInlineColor",
        "borderInlineEnd",
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth",
        "borderInlineStart",
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth",
        "borderInlineStyle",
        "borderInlineWidth",
        "inlineSize",
        "inset",
        "insetBlock",
        "insetBlockEnd",
        "insetBlockStart",
        "insetInline",
        "insetInlineEnd",
        "insetInlineStart",
        "marginBlock",
        "marginBlockEnd",
        "marginBlockStart",
        "marginInline",
        "marginInlineEnd",
        "marginInlineStart",
        "maxBlockSize",
        "maxInlineSize",
        "minBlockSize",
        "minInlineSize",
        "paddingBlock",
        "paddingBlockEnd",
        "paddingBlockStart",
        "paddingInline",
        "paddingInlineEnd",
        "paddingInlineStart"
     ]
  },
  {
     "specification": "CSS Masking Module Level 1",
     "use": true,
     "properties": [
        "clip",
        "clipPath",
        "clipRule",
        "mask",
        "maskBorder",
        "maskBorderMode",
        "maskBorderOutset",
        "maskBorderRepeat",
        "maskBorderSlice",
        "maskBorderSource",
        "maskBorderWidth",
        "maskClip",
        "maskComposite",
        "maskImage",
        "maskMode",
        "maskOrigin",
        "maskPosition",
        "maskRepeat",
        "maskSize",
        "maskType"
     ]
  },
  {
     "specification": "CSS Multi-column Layout Module Level 1",
     "use": true,
     "properties": [
        "columnCount",
        "columnFill",
        "columnGap",
        "columnRule",
        "columnRuleColor",
        "columnRuleStyle",
        "columnRuleWidth",
        "columnSpan",
        "columnWidth",
        "columns"
     ]
  },
  {
     "specification": "CSS Overflow Module Level 3",
     "use": true,
     "properties": [
        "blockOverflow",
        "lineClamp",
        "maxLines",
        "overflow",
        "overflowBlock",
        "overflowInline",
        "overflowX",
        "overflowY"
     ]
  },
  {
     "specification": "CSS Overflow Module Level 4",
     "use": false,
     "properties": [
        "continue",
        "maxLines",
        "scrollbarGutter"
     ]
  },
  {
     "specification": "CSS Page Floats",
     "use": false,
     "properties": [
        "clear",
        "float",
        "floatDefer",
        "floatOffset",
        "floatReference"
     ]
  },
  {
     "specification": "CSS Paged Media Module Level 3",
     "use": false,
     "properties": [
        "page",
        "size"
     ]
  },
  {
     "specification": "CSS Positioned Layout Module Level 3",
     "use": false,
     "properties": [
        "bottom",
        "left",
        "offsetAfter",
        "offsetBefore",
        "offsetEnd",
        "offsetStart",
        "position",
        "right",
        "top",
        "zIndex"
     ]
  },
  {
     "specification": "CSS Presentation Levels Module",
     "use": false,
     "properties": [
        "presentationLevel"
     ]
  },
  {
     "specification": "CSS Regions Module Level 1",
     "use": false,
     "properties": [
        "breakAfter",
        "breakBefore",
        "breakInside",
        "flowFrom",
        "flowInto",
        "regionFragment"
     ]
  },
  {
     "specification": "CSS Rhythmic Sizing",
     "use": false,
     "properties": [
        "blockStep",
        "blockStepAlign",
        "blockStepInsert",
        "blockStepRound",
        "blockStepSize",
        "lineHeightStep"
     ]
  },
  {
     "specification": "CSS Round Display Level 1",
     "use": false,
     "properties": [
        "borderBoundary",
        "shapeInside"
     ]
  },
  {
     "specification": "CSS Ruby Layout Module Level 1",
     "use": false,
     "properties": [
        "display",
        "rubyAlign",
        "rubyMerge",
        "rubyPosition"
     ]
  },
  {
     "specification": "CSS Scroll Snap Module Level 1",
     "use": false,
     "properties": [
        "scrollMargin",
        "scrollMarginBlock",
        "scrollMarginBlockEnd",
        "scrollMarginBlockStart",
        "scrollMarginBottom",
        "scrollMarginInline",
        "scrollMarginInlineEnd",
        "scrollMarginInlineStart",
        "scrollMarginLeft",
        "scrollMarginRight",
        "scrollMarginTop",
        "scrollPadding",
        "scrollPaddingBlock",
        "scrollPaddingBlockEnd",
        "scrollPaddingBlockStart",
        "scrollPaddingBottom",
        "scrollPaddingInline",
        "scrollPaddingInlineEnd",
        "scrollPaddingInlineStart",
        "scrollPaddingLeft",
        "scrollPaddingRight",
        "scrollPaddingTop",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollSnapType"
     ]
  },
  {
     "specification": "CSS Shapes Module Level 1",
     "use": true,
     "properties": [
        "shapeImageThreshold",
        "shapeMargin",
        "shapeOutside"
     ]
  },
  {
     "specification": "CSS Speech Module",
     "use": false,
     "properties": [
        "cue",
        "cueAfter",
        "cueBefore",
        "pause",
        "pauseAfter",
        "pauseBefore",
        "rest",
        "restAfter",
        "restBefore",
        "speak",
        "speakAs",
        "voiceBalance",
        "voiceDuration",
        "voiceFamily",
        "voicePitch",
        "voiceRange",
        "voiceRate",
        "voiceStress",
        "voiceVolume"
     ]
  },
  {
     "specification": "CSS Table Module Level 3",
     "use": false,
     "properties": [
        "borderCollapse",
        "borderSpacing",
        "captionSide",
        "emptyCells",
        "tableLayout"
     ]
  },
  {
     "specification": "CSS Template Layout Module",
     "use": false,
     "properties": [
        "chains",
        "flow",
        "grid",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
     ]
  },
  {
     "specification": "CSS Text Decoration Module Level 3",
     "use": true,
     "properties": [
        "textDecoration",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationSkip",
        "textDecorationStyle",
        "textEmphasis",
        "textEmphasisColor",
        "textEmphasisPosition",
        "textEmphasisStyle",
        "textShadow",
        "textUnderlinePosition"
     ]
  },
  {
     "specification": "CSS Text Decoration Module Level 4",
     "use": false,
     "properties": [
        "textDecorationLine",
        "textDecorationSkip",
        "textDecorationSkipInk",
        "textDecorationWidth",
        "textEmphasisSkip",
        "textUnderlineOffset"
     ]
  },
  {
     "specification": "CSS Text Module Level 3",
     "use": true,
     "properties": [
        "hangingPunctuation",
        "hyphens",
        "letterSpacing",
        "lineBreak",
        "overflowWrap",
        "tabSize",
        "textAlign",
        "textAlignAll",
        "textAlignLast",
        "textIndent",
        "textJustify",
        "textTransform",
        "whiteSpace",
        "wordBreak",
        "wordSpacing",
        "wordWrap"
     ]
  },
  {
     "specification": "CSS Text Module Level 4",
     "use": false,
     "properties": [
        "hyphenateCharacter",
        "hyphenateLimitChars",
        "hyphenateLimitLast",
        "hyphenateLimitLines",
        "hyphenateLimitZone",
        "textSpaceCollapse",
        "textSpaceTrim",
        "textSpacing",
        "textWrap",
        "whiteSpace",
        "wrapAfter",
        "wrapBefore",
        "wrapInside"
     ]
  },
  {
     "specification": "CSS Transforms Module Level 1",
     "use": true,
     "properties": [
        "transform",
        "transformBox",
        "transformOrigin"
     ]
  },
  {
     "specification": "CSS Transitions",
     "use": true,
     "properties": [
        "transition",
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
     ]
  },
  {
     "specification": "CSS Will Change Module Level 1",
     "use": true,
     "properties": [
        "willChange"
     ]
  },
  {
     "specification": "CSS Writing Modes Level 3",
     "use": true,
     "properties": [
        "direction",
        "glyphOrientationVertical",
        "textCombineUpright",
        "textOrientation",
        "unicodeBidi",
        "writingMode"
     ]
  },
  {
     "specification": "CSS Writing Modes Level 4",
     "use": true,
     "properties": [
        "direction",
        "glyphOrientationVertical",
        "textCombineUpright",
        "textOrientation",
        "unicodeBidi",
        "writingMode"
     ]
  },
  {
     "specification": "CSS basic box model",
     "use": true,
     "properties": [
        "clear",
        "display",
        "float",
        "height",
        "margin",
        "marginBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marqueeDirection",
        "marqueeLoop",
        "marqueeSpeed",
        "marqueeStyle",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "overflow",
        "overflowStyle",
        "overflowX",
        "overflowY",
        "padding",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "rotation",
        "rotationPoint",
        "visibility",
        "width"
     ]
  },
  {
     "specification": "CSSOM View Module",
     "use": false,
     "properties": [
        "scrollBehavior"
     ]
  },
  {
     "specification": "Compositing and Blending Level 1",
     "use": false,
     "properties": [
        "backgroundBlendMode",
        "isolation",
        "mixBlendMode"
     ]
  },
  {
     "specification": "Filter Effects Module Level 1",
     "use": false,
     "properties": [
        "colorInterpolationFilters",
        "filter",
        "floodColor",
        "floodOpacity",
        "lightingColor"
     ]
  },
  {
     "specification": "Motion Path Module Level 1",
     "use": false,
     "properties": [
        "offset",
        "offsetAnchor",
        "offsetDistance",
        "offsetPath",
        "offsetPosition",
        "offsetRotate"
     ]
  },
  {
     "specification": "SVG Markers",
     "use": false,
     "properties": [
        "marker",
        "markerEnd",
        "markerKnockoutLeft",
        "markerKnockoutRight",
        "markerMid",
        "markerPattern",
        "markerSegment",
        "markerStart"
     ]
  },
  {
     "specification": "SVG Strokes",
     "use": false,
     "properties": [
        "stroke",
        "strokeAlignment",
        "strokeDashadjust",
        "strokeDasharray",
        "strokeDashcorner",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth"
     ]
  }
]
