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

// const properties = {
//   "CSS Custom Properties for Cascading Variables Module Level 1": [
//      {
//         "property": "--*",
//         "url": "http://www.w3.org/TR/2015/CR-css-variables-1-20151203/#propdef-",
//         "status": "CR",
//         "title": "CSS Custom Properties for Cascading Variables Module Level 1"
//      },
//      {
//         "property": "--*",
//         "url": "https://drafts.csswg.org/css-variables/#propdef-",
//         "status": "ED",
//         "title": "CSS Custom Properties for Cascading Variables Module Level 1"
//      }
//   ],
//   "CSS Box Alignment Module Level 3": [
//      {
//         "property": "align-content",
//         "url": "https://drafts.csswg.org/css-align/#propdef-align-content",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "align-content",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-align-content",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "align-items",
//         "url": "https://drafts.csswg.org/css-align/#propdef-align-items",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "align-items",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-align-items",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "align-self",
//         "url": "https://drafts.csswg.org/css-align/#propdef-align-self",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "align-self",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-align-self",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "column-gap",
//         "url": "https://drafts.csswg.org/css-align/#propdef-column-gap",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "column-gap",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-column-gap",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "gap",
//         "url": "https://drafts.csswg.org/css-align/#propdef-gap",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "gap",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-gap",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-content",
//         "url": "https://drafts.csswg.org/css-align/#propdef-justify-content",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-content",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-justify-content",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-items",
//         "url": "https://drafts.csswg.org/css-align/#propdef-justify-items",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-items",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-justify-items",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-self",
//         "url": "https://drafts.csswg.org/css-align/#propdef-justify-self",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "justify-self",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-justify-self",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-content",
//         "url": "https://drafts.csswg.org/css-align/#propdef-place-content",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-content",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-place-content",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-items",
//         "url": "https://drafts.csswg.org/css-align/#propdef-place-items",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-items",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-place-items",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-self",
//         "url": "https://drafts.csswg.org/css-align/#propdef-place-self",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "place-self",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-place-self",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "row-gap",
//         "url": "https://drafts.csswg.org/css-align/#propdef-row-gap",
//         "status": "ED",
//         "title": "CSS Box Alignment Module Level 3"
//      },
//      {
//         "property": "row-gap",
//         "url": "https://www.w3.org/TR/2018/WD-css-align-3-20180423/#propdef-row-gap",
//         "status": "WD",
//         "title": "CSS Box Alignment Module Level 3"
//      }
//   ],
//   "CSS Flexible Box Layout Module Level 1": [
//      {
//         "property": "align-content",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-align-content",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "align-content",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-align-content",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "align-items",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-align-items",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "align-items",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-align-items",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "align-self",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-align-self",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "align-self",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-align-self",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-basis",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-basis",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-basis",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-basis",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-direction",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-direction",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-direction",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-direction",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-flow",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-flow",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-flow",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-flow",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-grow",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-grow",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-grow",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-grow",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-shrink",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-shrink",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-shrink",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-shrink",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-wrap",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-flex-wrap",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "flex-wrap",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-flex-wrap",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "justify-content",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-justify-content",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "justify-content",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-justify-content",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "order",
//         "url": "https://drafts.csswg.org/css-flexbox/#propdef-order",
//         "status": "ED",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      },
//      {
//         "property": "order",
//         "url": "https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/#propdef-order",
//         "status": "CR",
//         "title": "CSS Flexible Box Layout Module Level 1"
//      }
//   ],
//   "CSS Inline Layout Module Level 3": [
//      {
//         "property": "alignment-baseline",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-alignment-baseline",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "alignment-baseline",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-alignment-baseline",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "baseline-shift",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-baseline-shift",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "baseline-shift",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-baseline-shift",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "dominant-baseline",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-dominant-baseline",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "dominant-baseline",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-dominant-baseline",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-initial-letter",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-initial-letter",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter-align",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-initial-letter-align",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter-align",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-initial-letter-align",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter-wrap",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-initial-letter-wrap",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "initial-letter-wrap",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-initial-letter-wrap",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "vertical-align",
//         "url": "http://www.w3.org/TR/2016/WD-css-inline-3-20160524/#propdef-vertical-align",
//         "status": "WD",
//         "title": "CSS Inline Layout Module Level 3"
//      },
//      {
//         "property": "vertical-align",
//         "url": "https://drafts.csswg.org/css-inline/#propdef-vertical-align",
//         "status": "ED",
//         "title": "CSS Inline Layout Module Level 3"
//      }
//   ],
//   "CSS Cascading and Inheritance Level 3": [
//      {
//         "property": "all",
//         "url": "http://www.w3.org/TR/2016/CR-css-cascade-3-20160519/#propdef-all",
//         "status": "CR",
//         "title": "CSS Cascading and Inheritance Level 3"
//      },
//      {
//         "property": "all",
//         "url": "https://drafts.csswg.org/css-cascade-3/#propdef-all",
//         "status": "ED",
//         "title": "CSS Cascading and Inheritance Level 3"
//      }
//   ],
//   "CSS Cascading and Inheritance Level 4": [
//      {
//         "property": "all",
//         "url": "http://www.w3.org/TR/2016/CR-css-cascade-4-20160114/#propdef-all",
//         "status": "CR",
//         "title": "CSS Cascading and Inheritance Level 4"
//      },
//      {
//         "property": "all",
//         "url": "https://drafts.csswg.org/css-cascade/#propdef-all",
//         "status": "ED",
//         "title": "CSS Cascading and Inheritance Level 4"
//      }
//   ],
//   "CSS Animations Level 1": [
//      {
//         "property": "animation",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-delay",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-delay",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-delay",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-delay",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-direction",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-direction",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-direction",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-direction",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-duration",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-duration",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-duration",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-duration",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-fill-mode",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-fill-mode",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-fill-mode",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-fill-mode",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-iteration-count",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-iteration-count",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-iteration-count",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-iteration-count",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-name",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-name",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-name",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-name",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-play-state",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-play-state",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-play-state",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-play-state",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-timing-function",
//         "url": "https://drafts.csswg.org/css-animations/#propdef-animation-timing-function",
//         "status": "ED",
//         "title": "CSS Animations Level 1"
//      },
//      {
//         "property": "animation-timing-function",
//         "url": "https://www.w3.org/TR/2017/WD-css-animations-1-20171130/#propdef-animation-timing-function",
//         "status": "WD",
//         "title": "CSS Animations Level 1"
//      }
//   ],
//   "CSS Basic User Interface Module Level 4": [
//      {
//         "property": "appearance",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-appearance",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "appearance",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-appearance",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "box-sizing",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-box-sizing",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-caret",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-caret",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret-color",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-caret-color",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-caret-color",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret-shape",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-caret-shape",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "caret-shape",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-caret-shape",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "cursor",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-cursor",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "cursor",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-cursor",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-down",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-nav-down",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-down",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-nav-down",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-left",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-nav-left",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-left",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-nav-left",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-right",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-nav-right",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-right",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-nav-right",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-up",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-nav-up",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "nav-up",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-nav-up",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-outline",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-outline",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-color",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-outline-color",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-outline-color",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-offset",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-outline-offset",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-offset",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-outline-offset",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-style",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-outline-style",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-outline-style",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-width",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-outline-width",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "outline-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-outline-width",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "resize",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-resize",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "resize",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-resize",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "text-overflow",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-text-overflow",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "text-overflow",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-text-overflow",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "user-select",
//         "url": "https://drafts.csswg.org/css-ui-4/#propdef-user-select",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 4"
//      },
//      {
//         "property": "user-select",
//         "url": "https://www.w3.org/TR/2017/WD-css-ui-4-20171222/#propdef-user-select",
//         "status": "WD",
//         "title": "CSS Basic User Interface Module Level 4"
//      }
//   ],
//   "CSS Basic User Interface Module Level 3 (CSS3 UI)": [
//      {
//         "property": "appearance",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-appearance",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "box-sizing",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-box-sizing",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "caret",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-caret",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "caret-color",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-caret-color",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "caret-color",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-caret-color",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "caret-shape",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-caret-shape",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "cursor",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-cursor",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "cursor",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-cursor",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "nav-down",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-nav-down",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "nav-left",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-nav-left",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "nav-right",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-nav-right",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "nav-up",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-nav-up",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-outline",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-outline",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-color",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-outline-color",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-color",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-outline-color",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-offset",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-outline-offset",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-offset",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-outline-offset",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-style",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-outline-style",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-style",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-outline-style",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-width",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-outline-width",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "outline-width",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-outline-width",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "resize",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-resize",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "resize",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-resize",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "text-overflow",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-text-overflow",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "text-overflow",
//         "url": "https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-text-overflow",
//         "status": "REC",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      },
//      {
//         "property": "user-select",
//         "url": "https://drafts.csswg.org/css-ui/#propdef-user-select",
//         "status": "ED",
//         "title": "CSS Basic User Interface Module Level 3 (CSS3 UI)"
//      }
//   ],
//   "CSS 2.1": [
//      {
//         "property": "azimuth",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-azimuth",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background-attachment",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-attachment",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background-image",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-image",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background-position",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-position",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "background-repeat",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-repeat",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-bottom",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-bottom",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-bottom-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-bottom-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-bottom-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-bottom-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-bottom-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-bottom-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-collapse",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html#propdef-border-collapse",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-left",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-left",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-left-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-left-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-left-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-left-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-left-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-left-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-right",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-right",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-right-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-right-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-right-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-right-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-right-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-right-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-spacing",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html#propdef-border-spacing",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-top",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-top",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-top-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-top-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-top-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-top-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-top-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-top-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "border-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-border-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "bottom",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-bottom",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "caption-side",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html#propdef-caption-side",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "clear",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-clear",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "clip",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#propdef-clip",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "content",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-content",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "counter-increment",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-counter-increment",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "counter-reset",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-counter-reset",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "cue",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-cue",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "cue-after",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-cue-after",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "cue-before",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-cue-before",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "cursor",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#propdef-cursor",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "direction",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-direction",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "display",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-display",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "elevation",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-elevation",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "empty-cells",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html#propdef-empty-cells",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "float",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-float",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font-family",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font-family",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font-size",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font-size",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font-variant",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font-variant",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "font-weight",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/fonts.html#propdef-font-weight",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "height",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-height",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "left",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-left",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "letter-spacing",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-letter-spacing",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "line-height",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-line-height",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "list-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-list-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "list-style-image",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-list-style-image",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "list-style-position",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-list-style-position",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "list-style-type",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-list-style-type",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "margin",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-margin",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "margin-bottom",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-margin-bottom",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "margin-left",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-margin-left",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "margin-right",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-margin-right",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "margin-top",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-margin-top",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "max-height",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-max-height",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "max-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-max-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "min-height",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-min-height",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "min-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-min-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "orphans",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#propdef-orphans",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "outline",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#propdef-outline",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "outline-color",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#propdef-outline-color",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "outline-style",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#propdef-outline-style",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "outline-width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/ui.html#propdef-outline-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "overflow",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#propdef-overflow",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "padding",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-padding",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "padding-bottom",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-padding-bottom",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "padding-left",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-padding-left",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "padding-right",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-padding-right",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "padding-top",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#propdef-padding-top",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "page-break-after",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#propdef-page-break-after",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "page-break-before",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#propdef-page-break-before",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "page-break-inside",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#propdef-page-break-inside",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "pause",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pause",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "pause-after",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pause-after",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "pause-before",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pause-before",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "pitch",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pitch",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "pitch-range",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pitch-range",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "play-during",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-play-during",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "position",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-position",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "quotes",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/generate.html#propdef-quotes",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "richness",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-richness",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "right",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-right",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "speak",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "speak-header",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-header",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "speak-numeral",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-numeral",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "speak-punctuation",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-punctuation",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "speech-rate",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speech-rate",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "stress",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-stress",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "table-layout",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/tables.html#propdef-table-layout",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "text-align",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-text-align",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "text-decoration",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-text-decoration",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "text-indent",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-text-indent",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "text-transform",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-text-transform",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "top",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-top",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "unicode-bidi",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-unicode-bidi",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "vertical-align",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-vertical-align",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "visibility",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#propdef-visibility",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "voice-family",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-voice-family",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "volume",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-volume",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "white-space",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-white-space",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "widows",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#propdef-widows",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "width",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-width",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "word-spacing",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/text.html#propdef-word-spacing",
//         "status": "REC",
//         "title": "CSS 2.1"
//      },
//      {
//         "property": "z-index",
//         "url": "http://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#propdef-z-index",
//         "status": "REC",
//         "title": "CSS 2.1"
//      }
//   ],
//   "CSS Backgrounds and Borders Module Level 3": [
//      {
//         "property": "background",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-attachment",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-attachment",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-attachment",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-attachment",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-clip",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-clip",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-clip",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-clip",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-image",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-image",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-image",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-image",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-origin",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-origin",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-origin",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-origin",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-position",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-position",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-position",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-position",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-repeat",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-repeat",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-repeat",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-repeat",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-size",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-background-size",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "background-size",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-size",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-left-radius",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-left-radius",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-left-radius",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom-left-radius",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-right-radius",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-right-radius",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-right-radius",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom-right-radius",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-style",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-style",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-style",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom-style",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-bottom-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-bottom-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-outset",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image-outset",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-outset",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-outset",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-repeat",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image-repeat",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-repeat",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-repeat",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-slice",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image-slice",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-slice",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-slice",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-source",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image-source",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-source",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-source",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-image-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-image-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-left",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-left",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-left-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-left-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-style",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-left-style",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-style",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-left-style",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-left-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-left-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-left-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-radius",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-radius",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-radius",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-radius",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-right",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-right",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-right-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-right-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-style",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-right-style",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-style",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-right-style",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-right-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-right-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-right-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-style",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-style",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-style",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-style",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-color",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top-color",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-color",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top-color",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-left-radius",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top-left-radius",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-left-radius",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top-left-radius",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-right-radius",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top-right-radius",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-right-radius",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top-right-radius",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-style",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top-style",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-style",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top-style",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-top-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-top-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-top-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-width",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-border-width",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "border-width",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-width",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "box-shadow",
//         "url": "https://drafts.csswg.org/css-backgrounds/#propdef-box-shadow",
//         "status": "ED",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      },
//      {
//         "property": "box-shadow",
//         "url": "https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-box-shadow",
//         "status": "CR",
//         "title": "CSS Backgrounds and Borders Module Level 3"
//      }
//   ],
//   "Compositing and Blending Level 1": [
//      {
//         "property": "background-blend-mode",
//         "url": "http://www.w3.org/TR/2015/CR-compositing-1-20150113/#propdef-background-blend-mode",
//         "status": "CR",
//         "title": "Compositing and Blending Level 1"
//      },
//      {
//         "property": "background-blend-mode",
//         "url": "https://drafts.fxtf.org/compositing-1/#propdef-background-blend-mode",
//         "status": "ED",
//         "title": "Compositing and Blending Level 1"
//      },
//      {
//         "property": "isolation",
//         "url": "http://www.w3.org/TR/2015/CR-compositing-1-20150113/#propdef-isolation",
//         "status": "CR",
//         "title": "Compositing and Blending Level 1"
//      },
//      {
//         "property": "isolation",
//         "url": "https://drafts.fxtf.org/compositing-1/#propdef-isolation",
//         "status": "ED",
//         "title": "Compositing and Blending Level 1"
//      },
//      {
//         "property": "mix-blend-mode",
//         "url": "http://www.w3.org/TR/2015/CR-compositing-1-20150113/#propdef-mix-blend-mode",
//         "status": "CR",
//         "title": "Compositing and Blending Level 1"
//      },
//      {
//         "property": "mix-blend-mode",
//         "url": "https://drafts.fxtf.org/compositing-1/#propdef-mix-blend-mode",
//         "status": "ED",
//         "title": "Compositing and Blending Level 1"
//      }
//   ],
//   "CSS Logical Properties and Values Level 1": [
//      {
//         "property": "background-image-transform",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-background-image-transform",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "background-image-transform",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-background-image-transform",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "block-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-block-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "block-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-block-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-end-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-end-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-end-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-end-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-end-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-end-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-end-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-start-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-start-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-start-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-start-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-start-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-start-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-start-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-block-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-block-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-block-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-image-transform",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-image-transform",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-image-transform",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-image-transform",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-end-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-end-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-end-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-end-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-end-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-end-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-end-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-color",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-start-color",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-color",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-start-color",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-start-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-start-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-start-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-start-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-start-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-style",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-style",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-style",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-style",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-width",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-border-inline-width",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "border-inline-width",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-border-inline-width",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inline-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inline-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inline-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inline-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-block",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-block",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-block-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-block-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-block-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-block-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-block-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-inline",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-inline",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-inline-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-inline-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-inset-inline-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "inset-inline-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-inset-inline-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-block",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-block",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-block-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-block-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-block-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-block-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-block-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-inline",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-inline",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-inline-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-inline-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-margin-inline-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "margin-inline-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-margin-inline-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "max-block-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-max-block-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "max-block-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-max-block-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "max-inline-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-max-inline-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "max-inline-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-max-inline-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "min-block-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-min-block-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "min-block-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-min-block-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "min-inline-size",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-min-inline-size",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "min-inline-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-min-inline-size",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-block",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-block",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-block-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-block-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-block-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-block-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-block-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-inline",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-inline",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline-end",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-inline-end",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline-end",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-inline-end",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline-start",
//         "url": "https://drafts.csswg.org/css-logical/#propdef-padding-inline-start",
//         "status": "ED",
//         "title": "CSS Logical Properties and Values Level 1"
//      },
//      {
//         "property": "padding-inline-start",
//         "url": "https://www.w3.org/TR/2017/WD-css-logical-1-20170518/#propdef-padding-inline-start",
//         "status": "FPWD",
//         "title": "CSS Logical Properties and Values Level 1"
//      }
//   ],
//   "CSS Overflow Module Level 3": [
//      {
//         "property": "block-overflow",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-block-overflow",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "line-clamp",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-line-clamp",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "max-lines",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-max-lines",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "max-lines",
//         "url": "http://www.w3.org/TR/2016/WD-css-overflow-3-20160531/#propdef-max-lines",
//         "status": "WD",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-overflow",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow",
//         "url": "http://www.w3.org/TR/2016/WD-css-overflow-3-20160531/#propdef-overflow",
//         "status": "WD",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-block",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-overflow-block",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-inline",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-overflow-inline",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-x",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-overflow-x",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-x",
//         "url": "http://www.w3.org/TR/2016/WD-css-overflow-3-20160531/#propdef-overflow-x",
//         "status": "WD",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-y",
//         "url": "http://drafts.csswg.org/css-overflow/#propdef-overflow-y",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 3"
//      },
//      {
//         "property": "overflow-y",
//         "url": "http://www.w3.org/TR/2016/WD-css-overflow-3-20160531/#propdef-overflow-y",
//         "status": "WD",
//         "title": "CSS Overflow Module Level 3"
//      }
//   ],
//   "CSS Rhythmic Sizing": [
//      {
//         "property": "block-step",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-block-step",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-block-step",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-align",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-block-step-align",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-align",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-block-step-align",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-insert",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-block-step-insert",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-insert",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-block-step-insert",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-round",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-block-step-round",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-round",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-block-step-round",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-size",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-block-step-size",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "block-step-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-block-step-size",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "line-height-step",
//         "url": "https://drafts.csswg.org/css-rhythm/#propdef-line-height-step",
//         "status": "ED",
//         "title": "CSS Rhythmic Sizing"
//      },
//      {
//         "property": "line-height-step",
//         "url": "https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/#propdef-line-height-step",
//         "status": "FPWD",
//         "title": "CSS Rhythmic Sizing"
//      }
//   ],
//   "CSS Generated Content for Paged Media Module": [
//      {
//         "property": "bookmark-label",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-bookmark-label",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "bookmark-level",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-bookmark-level",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "bookmark-state",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-bookmark-state",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "footnote-display",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-footnote-display",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "footnote-display",
//         "url": "https://drafts.csswg.org/css-gcpm/#propdef-footnote-display",
//         "status": "ED",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "footnote-policy",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-footnote-policy",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "footnote-policy",
//         "url": "https://drafts.csswg.org/css-gcpm/#propdef-footnote-policy",
//         "status": "ED",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "running",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-running",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "running",
//         "url": "https://drafts.csswg.org/css-gcpm/#propdef-running",
//         "status": "ED",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "string-set",
//         "url": "http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#propdef-string-set",
//         "status": "WD",
//         "title": "CSS Generated Content for Paged Media Module"
//      },
//      {
//         "property": "string-set",
//         "url": "https://drafts.csswg.org/css-gcpm/#propdef-string-set",
//         "status": "ED",
//         "title": "CSS Generated Content for Paged Media Module"
//      }
//   ],
//   "CSS Generated Content Module Level 3": [
//      {
//         "property": "bookmark-label",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-bookmark-label",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "bookmark-label",
//         "url": "https://drafts.csswg.org/css-content/#propdef-bookmark-label",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "bookmark-level",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-bookmark-level",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "bookmark-level",
//         "url": "https://drafts.csswg.org/css-content/#propdef-bookmark-level",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "bookmark-state",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-bookmark-state",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "bookmark-state",
//         "url": "https://drafts.csswg.org/css-content/#propdef-bookmark-state",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "content",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-content",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "content",
//         "url": "https://drafts.csswg.org/css-content/#propdef-content",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "quotes",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-quotes",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "quotes",
//         "url": "https://drafts.csswg.org/css-content/#propdef-quotes",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "string-set",
//         "url": "http://www.w3.org/TR/2016/WD-css-content-3-20160602/#propdef-string-set",
//         "status": "WD",
//         "title": "CSS Generated Content Module Level 3"
//      },
//      {
//         "property": "string-set",
//         "url": "https://drafts.csswg.org/css-content/#propdef-string-set",
//         "status": "ED",
//         "title": "CSS Generated Content Module Level 3"
//      }
//   ],
//   "CSS Round Display Level 1": [
//      {
//         "property": "border-boundary",
//         "url": "https://drafts.csswg.org/css-round-display/#propdef-border-boundary",
//         "status": "ED",
//         "title": "CSS Round Display Level 1"
//      },
//      {
//         "property": "border-boundary",
//         "url": "https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/#propdef-border-boundary",
//         "status": "WD",
//         "title": "CSS Round Display Level 1"
//      },
//      {
//         "property": "shape-inside",
//         "url": "https://drafts.csswg.org/css-round-display/#propdef-shape-inside",
//         "status": "ED",
//         "title": "CSS Round Display Level 1"
//      },
//      {
//         "property": "shape-inside",
//         "url": "https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/#propdef-shape-inside",
//         "status": "WD",
//         "title": "CSS Round Display Level 1"
//      }
//   ],
//   "CSS Table Module Level 3": [
//      {
//         "property": "border-collapse",
//         "url": "https://drafts.csswg.org/css-tables-3/#propdef-border-collapse",
//         "status": "ED",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "border-collapse",
//         "url": "https://www.w3.org/TR/2017/WD-css-tables-3-20170307/#propdef-border-collapse",
//         "status": "WD",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "border-spacing",
//         "url": "https://drafts.csswg.org/css-tables-3/#propdef-border-spacing",
//         "status": "ED",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "border-spacing",
//         "url": "https://www.w3.org/TR/2017/WD-css-tables-3-20170307/#propdef-border-spacing",
//         "status": "WD",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "caption-side",
//         "url": "https://drafts.csswg.org/css-tables-3/#propdef-caption-side",
//         "status": "ED",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "caption-side",
//         "url": "https://www.w3.org/TR/2017/WD-css-tables-3-20170307/#propdef-caption-side",
//         "status": "WD",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "empty-cells",
//         "url": "https://drafts.csswg.org/css-tables-3/#propdef-empty-cells",
//         "status": "ED",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "empty-cells",
//         "url": "https://www.w3.org/TR/2017/WD-css-tables-3-20170307/#propdef-empty-cells",
//         "status": "WD",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "table-layout",
//         "url": "https://drafts.csswg.org/css-tables-3/#propdef-table-layout",
//         "status": "ED",
//         "title": "CSS Table Module Level 3"
//      },
//      {
//         "property": "table-layout",
//         "url": "https://www.w3.org/TR/2017/WD-css-tables-3-20170307/#propdef-table-layout",
//         "status": "WD",
//         "title": "CSS Table Module Level 3"
//      }
//   ],
//   "CSS Positioned Layout Module Level 3": [
//      {
//         "property": "bottom",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-bottom",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "bottom",
//         "url": "https://drafts.csswg.org/css-position/#propdef-bottom",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "left",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-left",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "left",
//         "url": "https://drafts.csswg.org/css-position/#propdef-left",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-after",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-offset-after",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-after",
//         "url": "https://drafts.csswg.org/css-position/#propdef-offset-after",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-before",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-offset-before",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-before",
//         "url": "https://drafts.csswg.org/css-position/#propdef-offset-before",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-end",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-offset-end",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-end",
//         "url": "https://drafts.csswg.org/css-position/#propdef-offset-end",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-start",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-offset-start",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "offset-start",
//         "url": "https://drafts.csswg.org/css-position/#propdef-offset-start",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "position",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-position",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "position",
//         "url": "https://drafts.csswg.org/css-position/#propdef-position",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "right",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-right",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "right",
//         "url": "https://drafts.csswg.org/css-position/#propdef-right",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "top",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-top",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "top",
//         "url": "https://drafts.csswg.org/css-position/#propdef-top",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "z-index",
//         "url": "http://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-z-index",
//         "status": "WD",
//         "title": "CSS Positioned Layout Module Level 3"
//      },
//      {
//         "property": "z-index",
//         "url": "https://drafts.csswg.org/css-position/#propdef-z-index",
//         "status": "ED",
//         "title": "CSS Positioned Layout Module Level 3"
//      }
//   ],
//   "CSS Fragmentation Module Level 3": [
//      {
//         "property": "box-decoration-break",
//         "url": "https://drafts.csswg.org/css-break/#propdef-box-decoration-break",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "box-decoration-break",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-box-decoration-break",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-after",
//         "url": "https://drafts.csswg.org/css-break/#propdef-break-after",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-after",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-break-after",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-before",
//         "url": "https://drafts.csswg.org/css-break/#propdef-break-before",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-before",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-break-before",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-inside",
//         "url": "https://drafts.csswg.org/css-break/#propdef-break-inside",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "break-inside",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-break-inside",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "orphans",
//         "url": "https://drafts.csswg.org/css-break/#propdef-orphans",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "orphans",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-orphans",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "widows",
//         "url": "https://drafts.csswg.org/css-break/#propdef-widows",
//         "status": "ED",
//         "title": "CSS Fragmentation Module Level 3"
//      },
//      {
//         "property": "widows",
//         "url": "https://www.w3.org/TR/2017/CR-css-break-3-20170209/#propdef-widows",
//         "status": "CR",
//         "title": "CSS Fragmentation Module Level 3"
//      }
//   ],
//   "CSS Intrinsic & Extrinsic Sizing Module Level 3": [
//      {
//         "property": "box-sizing",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-box-sizing",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "box-sizing",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-box-sizing",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "height",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-height",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "height",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-height",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "max-height",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-max-height",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "max-height",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-max-height",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "max-width",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-max-width",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "max-width",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-max-width",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "min-height",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-min-height",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "min-height",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-min-height",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "min-width",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-min-width",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "min-width",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-min-width",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "width",
//         "url": "https://drafts.csswg.org/css-sizing-3/#propdef-width",
//         "status": "ED",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      },
//      {
//         "property": "width",
//         "url": "https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/#propdef-width",
//         "status": "WD",
//         "title": "CSS Intrinsic & Extrinsic Sizing Module Level 3"
//      }
//   ],
//   "CSS Line Grid Module Level 1": [
//      {
//         "property": "box-snap",
//         "url": "http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/#propdef-box-snap",
//         "status": "WD",
//         "title": "CSS Line Grid Module Level 1"
//      },
//      {
//         "property": "box-snap",
//         "url": "https://drafts.csswg.org/css-line-grid/#propdef-box-snap",
//         "status": "ED",
//         "title": "CSS Line Grid Module Level 1"
//      },
//      {
//         "property": "line-grid",
//         "url": "http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/#propdef-line-grid",
//         "status": "WD",
//         "title": "CSS Line Grid Module Level 1"
//      },
//      {
//         "property": "line-grid",
//         "url": "https://drafts.csswg.org/css-line-grid/#propdef-line-grid",
//         "status": "ED",
//         "title": "CSS Line Grid Module Level 1"
//      },
//      {
//         "property": "line-snap",
//         "url": "http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/#propdef-line-snap",
//         "status": "WD",
//         "title": "CSS Line Grid Module Level 1"
//      },
//      {
//         "property": "line-snap",
//         "url": "https://drafts.csswg.org/css-line-grid/#propdef-line-snap",
//         "status": "ED",
//         "title": "CSS Line Grid Module Level 1"
//      }
//   ],
//   "CSS Regions Module Level 1": [
//      {
//         "property": "break-after",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-break-after",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "break-after",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-break-after",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "break-before",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-break-before",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "break-before",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-break-before",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "break-inside",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-break-inside",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "break-inside",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-break-inside",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "flow-from",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-flow-from",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "flow-from",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-flow-from",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "flow-into",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-flow-into",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "flow-into",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-flow-into",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "region-fragment",
//         "url": "http://www.w3.org/TR/2014/WD-css-regions-1-20141009/#propdef-region-fragment",
//         "status": "WD",
//         "title": "CSS Regions Module Level 1"
//      },
//      {
//         "property": "region-fragment",
//         "url": "https://drafts.csswg.org/css-regions/#propdef-region-fragment",
//         "status": "ED",
//         "title": "CSS Regions Module Level 1"
//      }
//   ],
//   "CSS Template Layout Module": [
//      {
//         "property": "chains",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#chains0",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "chains",
//         "url": "https://drafts.csswg.org/css-template/#chains0",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "flow",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#flow0",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "flow",
//         "url": "https://drafts.csswg.org/css-template/#flow0",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#grid",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid",
//         "url": "https://drafts.csswg.org/css-template/#grid",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#grid-template0",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template",
//         "url": "https://drafts.csswg.org/css-template/#grid-template0",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-areas",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#grid-template-areas",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-areas",
//         "url": "https://drafts.csswg.org/css-template/#grid-template-areas",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-columns",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#grid-template-columns",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-columns",
//         "url": "https://drafts.csswg.org/css-template/#grid-template-columns",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-rows",
//         "url": "http://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#grid-template-rows",
//         "status": "NOTE",
//         "title": "CSS Template Layout Module"
//      },
//      {
//         "property": "grid-template-rows",
//         "url": "https://drafts.csswg.org/css-template/#grid-template-rows",
//         "status": "ED",
//         "title": "CSS Template Layout Module"
//      }
//   ],
//   "CSS basic box model": [
//      {
//         "property": "clear",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#clear",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "display",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#display",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "float",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#float",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "height",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#height",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "margin",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#margin1",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "margin-bottom",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#margin-bottom",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "margin-left",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#margin-left",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "margin-right",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#margin-right",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "margin-top",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#margin-top",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "marquee-direction",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#marquee-direction",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "marquee-loop",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#marquee-loop",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "marquee-speed",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#marquee-speed",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "marquee-style",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#marquee-style",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "max-height",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#max-height",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "max-width",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#max-width",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "min-height",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#min-height",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "min-width",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#min-width",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "overflow",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#overflow0",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "overflow-style",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#overflow-style",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "overflow-x",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#overflow-x",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "overflow-y",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#overflow-y",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "padding",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#padding1",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "padding-bottom",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#padding-bottom",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "padding-left",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#padding-left",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "padding-right",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#padding-right",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "padding-top",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#padding-top",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "rotation",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#rotation",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "rotation-point",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#rotation-point",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "visibility",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#visibility",
//         "status": "WD",
//         "title": "CSS basic box model"
//      },
//      {
//         "property": "width",
//         "url": "http://www.w3.org/TR/2007/WD-css3-box-20070809/#width",
//         "status": "WD",
//         "title": "CSS basic box model"
//      }
//   ],
//   "CSS Page Floats": [
//      {
//         "property": "clear",
//         "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/#propdef-clear",
//         "status": "FPWD",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "clear",
//         "url": "https://drafts.csswg.org/css-page-floats/#propdef-clear",
//         "status": "ED",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float",
//         "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/#propdef-float",
//         "status": "FPWD",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float",
//         "url": "https://drafts.csswg.org/css-page-floats/#propdef-float",
//         "status": "ED",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-defer",
//         "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/#propdef-float-defer",
//         "status": "FPWD",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-defer",
//         "url": "https://drafts.csswg.org/css-page-floats/#propdef-float-defer",
//         "status": "ED",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-offset",
//         "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/#propdef-float-offset",
//         "status": "FPWD",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-offset",
//         "url": "https://drafts.csswg.org/css-page-floats/#propdef-float-offset",
//         "status": "ED",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-reference",
//         "url": "http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/#propdef-float-reference",
//         "status": "FPWD",
//         "title": "CSS Page Floats"
//      },
//      {
//         "property": "float-reference",
//         "url": "https://drafts.csswg.org/css-page-floats/#propdef-float-reference",
//         "status": "ED",
//         "title": "CSS Page Floats"
//      }
//   ],
//   "CSS Masking Module Level 1": [
//      {
//         "property": "clip",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-clip",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "clip",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-clip",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "clip-path",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-clip-path",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "clip-path",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-clip-path",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "clip-rule",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-clip-rule",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "clip-rule",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-mode",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-mode",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-mode",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-mode",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-outset",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-outset",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-outset",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-outset",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-repeat",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-repeat",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-repeat",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-repeat",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-slice",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-slice",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-slice",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-slice",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-source",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-source",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-source",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-source",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-width",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-border-width",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-border-width",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-width",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-clip",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-clip",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-clip",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-clip",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-composite",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-composite",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-composite",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-composite",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-image",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-image",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-image",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-image",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-mode",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-mode",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-mode",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-mode",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-origin",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-origin",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-origin",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-origin",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-position",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-position",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-position",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-position",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-repeat",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-repeat",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-repeat",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-repeat",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-size",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-size",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-size",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-size",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-type",
//         "url": "http://www.w3.org/TR/2014/CR-css-masking-1-20140826/#propdef-mask-type",
//         "status": "CR",
//         "title": "CSS Masking Module Level 1"
//      },
//      {
//         "property": "mask-type",
//         "url": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-type",
//         "status": "ED",
//         "title": "CSS Masking Module Level 1"
//      }
//   ],
//   "CSS Color Module Level 3": [
//      {
//         "property": "color",
//         "url": "http://www.w3.org/TR/2011/REC-css3-color-20110607/#color0",
//         "status": "REC",
//         "title": "CSS Color Module Level 3"
//      },
//      {
//         "property": "color",
//         "url": "https://drafts.csswg.org/css-color-3/#color0",
//         "status": "ED",
//         "title": "CSS Color Module Level 3"
//      },
//      {
//         "property": "color",
//         "url": "https://www.w3.org/TR/2018/REC-css-color-3-20180619/#color0",
//         "status": "REC",
//         "title": "CSS Color Module Level 3"
//      },
//      {
//         "property": "opacity",
//         "url": "http://www.w3.org/TR/2011/REC-css3-color-20110607/#opacity",
//         "status": "REC",
//         "title": "CSS Color Module Level 3"
//      },
//      {
//         "property": "opacity",
//         "url": "https://drafts.csswg.org/css-color-3/#opacity",
//         "status": "ED",
//         "title": "CSS Color Module Level 3"
//      },
//      {
//         "property": "opacity",
//         "url": "https://www.w3.org/TR/2018/REC-css-color-3-20180619/#opacity",
//         "status": "REC",
//         "title": "CSS Color Module Level 3"
//      }
//   ],
//   "CSS Color Module Level 4": [
//      {
//         "property": "color",
//         "url": "http://www.w3.org/TR/2016/WD-css-color-4-20160705/#propdef-color",
//         "status": "FPWD",
//         "title": "CSS Color Module Level 4"
//      },
//      {
//         "property": "color",
//         "url": "https://drafts.csswg.org/css-color/#propdef-color",
//         "status": "ED",
//         "title": "CSS Color Module Level 4"
//      },
//      {
//         "property": "color-adjust",
//         "url": "http://www.w3.org/TR/2016/WD-css-color-4-20160705/#propdef-color-adjust",
//         "status": "FPWD",
//         "title": "CSS Color Module Level 4"
//      },
//      {
//         "property": "color-adjust",
//         "url": "https://drafts.csswg.org/css-color/#propdef-color-adjust",
//         "status": "ED",
//         "title": "CSS Color Module Level 4"
//      },
//      {
//         "property": "opacity",
//         "url": "http://www.w3.org/TR/2016/WD-css-color-4-20160705/#propdef-opacity",
//         "status": "FPWD",
//         "title": "CSS Color Module Level 4"
//      },
//      {
//         "property": "opacity",
//         "url": "https://drafts.csswg.org/css-color/#propdef-opacity",
//         "status": "ED",
//         "title": "CSS Color Module Level 4"
//      }
//   ],
//   "Filter Effects Module Level 1": [
//      {
//         "property": "color-interpolation-filters",
//         "url": "http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#propdef-color-interpolation-filters",
//         "status": "WD",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "color-interpolation-filters",
//         "url": "https://drafts.fxtf.org/filter-effects/#propdef-color-interpolation-filters",
//         "status": "ED",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "filter",
//         "url": "http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#propdef-filter",
//         "status": "WD",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "filter",
//         "url": "https://drafts.fxtf.org/filter-effects/#propdef-filter",
//         "status": "ED",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "flood-color",
//         "url": "http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#propdef-flood-color",
//         "status": "WD",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "flood-color",
//         "url": "https://drafts.fxtf.org/filter-effects/#propdef-flood-color",
//         "status": "ED",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "flood-opacity",
//         "url": "http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#propdef-flood-opacity",
//         "status": "WD",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "flood-opacity",
//         "url": "https://drafts.fxtf.org/filter-effects/#propdef-flood-opacity",
//         "status": "ED",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "lighting-color",
//         "url": "http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#propdef-lighting-color",
//         "status": "WD",
//         "title": "Filter Effects Module Level 1"
//      },
//      {
//         "property": "lighting-color",
//         "url": "https://drafts.fxtf.org/filter-effects/#propdef-lighting-color",
//         "status": "ED",
//         "title": "Filter Effects Module Level 1"
//      }
//   ],
//   "CSS Multi-column Layout Module Level 1": [
//      {
//         "property": "column-count",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-count",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-count",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-count",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-fill",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-fill",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-fill",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-fill",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-gap",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-gap",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-gap",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-gap",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-rule",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-rule",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-color",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-color",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-color",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-rule-color",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-style",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-style",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-style",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-rule-style",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-width",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-width",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-rule-width",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-rule-width",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-span",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-span",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-span",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-span",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-width",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-column-width",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "column-width",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-column-width",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "columns",
//         "url": "https://drafts.csswg.org/css-multicol/#propdef-columns",
//         "status": "ED",
//         "title": "CSS Multi-column Layout Module Level 1"
//      },
//      {
//         "property": "columns",
//         "url": "https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/#propdef-columns",
//         "status": "WD",
//         "title": "CSS Multi-column Layout Module Level 1"
//      }
//   ],
//   "CSS Containment Module Level 1": [
//      {
//         "property": "contain",
//         "url": "https://drafts.csswg.org/css-contain/#propdef-contain",
//         "status": "ED",
//         "title": "CSS Containment Module Level 1"
//      },
//      {
//         "property": "contain",
//         "url": "https://www.w3.org/TR/2018/CR-css-contain-1-20180524/#propdef-contain",
//         "status": "CR",
//         "title": "CSS Containment Module Level 1"
//      }
//   ],
//   "CSS Overflow Module Level 4": [
//      {
//         "property": "continue",
//         "url": "https://drafts.csswg.org/css-overflow-4/#propdef-continue",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 4"
//      },
//      {
//         "property": "continue",
//         "url": "https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/#propdef-continue",
//         "status": "FPWD",
//         "title": "CSS Overflow Module Level 4"
//      },
//      {
//         "property": "max-lines",
//         "url": "https://drafts.csswg.org/css-overflow-4/#propdef-max-lines",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 4"
//      },
//      {
//         "property": "max-lines",
//         "url": "https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/#propdef-max-lines",
//         "status": "FPWD",
//         "title": "CSS Overflow Module Level 4"
//      },
//      {
//         "property": "scrollbar-gutter",
//         "url": "https://drafts.csswg.org/css-overflow-4/#propdef-scrollbar-gutter",
//         "status": "ED",
//         "title": "CSS Overflow Module Level 4"
//      },
//      {
//         "property": "scrollbar-gutter",
//         "url": "https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/#propdef-scrollbar-gutter",
//         "status": "FPWD",
//         "title": "CSS Overflow Module Level 4"
//      }
//   ],
//   "CSS Lists and Counters Module Level 3": [
//      {
//         "property": "counter-increment",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-counter-increment",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "counter-increment",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-counter-increment",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "counter-reset",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-counter-reset",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "counter-reset",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-counter-reset",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "counter-set",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-counter-set",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "counter-set",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-counter-set",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-list-style",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-list-style",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-image",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-list-style-image",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-image",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-image",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-position",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-list-style-position",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-position",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-position",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-type",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-list-style-type",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "list-style-type",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-type",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "marker-side",
//         "url": "http://www.w3.org/TR/2014/WD-css-lists-3-20140320/#propdef-marker-side",
//         "status": "WD",
//         "title": "CSS Lists and Counters Module Level 3"
//      },
//      {
//         "property": "marker-side",
//         "url": "https://drafts.csswg.org/css-lists-3/#propdef-marker-side",
//         "status": "ED",
//         "title": "CSS Lists and Counters Module Level 3"
//      }
//   ],
//   "CSS Speech Module": [
//      {
//         "property": "cue",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#cue",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "cue-after",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#cue-after",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "cue-before",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#cue-before",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "pause",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#pause",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "pause-after",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#pause-after",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "pause-before",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#pause-before",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "rest",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#rest",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "rest-after",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#rest-after",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "rest-before",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#rest-before",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "speak",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#speak",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "speak-as",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#speak-as",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-balance",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-balance",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-duration",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-duration",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-family",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-family",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-pitch",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-pitch",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-range",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-range",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-rate",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-rate",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-stress",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-stress",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      },
//      {
//         "property": "voice-volume",
//         "url": "https://www.w3.org/TR/2018/NOTE-css3-speech-20180605/#voice-volume",
//         "status": "NOTE",
//         "title": "CSS Speech Module"
//      }
//   ],
//   "CSS Writing Modes Level 3": [
//      {
//         "property": "direction",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-direction",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "direction",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-direction",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "glyph-orientation-vertical",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-glyph-orientation-vertical",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "glyph-orientation-vertical",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-glyph-orientation-vertical",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "text-combine-upright",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-text-combine-upright",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "text-combine-upright",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-text-combine-upright",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "text-orientation",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-text-orientation",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "text-orientation",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-text-orientation",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "unicode-bidi",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "unicode-bidi",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-unicode-bidi",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "writing-mode",
//         "url": "https://drafts.csswg.org/css-writing-modes-3/#propdef-writing-mode",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 3"
//      },
//      {
//         "property": "writing-mode",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/#propdef-writing-mode",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 3"
//      }
//   ],
//   "CSS Writing Modes Level 4": [
//      {
//         "property": "direction",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-direction",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "direction",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-direction",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "glyph-orientation-vertical",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-glyph-orientation-vertical",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "glyph-orientation-vertical",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-glyph-orientation-vertical",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "text-combine-upright",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-text-combine-upright",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "text-combine-upright",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-text-combine-upright",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "text-orientation",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-text-orientation",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "text-orientation",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-text-orientation",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "unicode-bidi",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-unicode-bidi",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "unicode-bidi",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-unicode-bidi",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "writing-mode",
//         "url": "https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode",
//         "status": "ED",
//         "title": "CSS Writing Modes Level 4"
//      },
//      {
//         "property": "writing-mode",
//         "url": "https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/#propdef-writing-mode",
//         "status": "CR",
//         "title": "CSS Writing Modes Level 4"
//      }
//   ],
//   "CSS Ruby Layout Module Level 1": [
//      {
//         "property": "display",
//         "url": "http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/#propdef-display",
//         "status": "WD",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-align",
//         "url": "http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/#propdef-ruby-align",
//         "status": "WD",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-align",
//         "url": "https://drafts.csswg.org/css-ruby-1/#propdef-ruby-align",
//         "status": "ED",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-merge",
//         "url": "http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/#propdef-ruby-merge",
//         "status": "WD",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-merge",
//         "url": "https://drafts.csswg.org/css-ruby-1/#propdef-ruby-merge",
//         "status": "ED",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-position",
//         "url": "http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/#propdef-ruby-position",
//         "status": "WD",
//         "title": "CSS Ruby Layout Module Level 1"
//      },
//      {
//         "property": "ruby-position",
//         "url": "https://drafts.csswg.org/css-ruby-1/#propdef-ruby-position",
//         "status": "ED",
//         "title": "CSS Ruby Layout Module Level 1"
//      }
//   ],
//   "CSS Display Module Level 3": [
//      {
//         "property": "display",
//         "url": "https://drafts.csswg.org/css-display/#propdef-display",
//         "status": "ED",
//         "title": "CSS Display Module Level 3"
//      },
//      {
//         "property": "display",
//         "url": "https://www.w3.org/TR/2018/WD-css-display-3-20180420/#propdef-display",
//         "status": "WD",
//         "title": "CSS Display Module Level 3"
//      }
//   ],
//   "CSS Fill and Stroke Module Level 3": [
//      {
//         "property": "fill",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-break",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-break",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-break",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-break",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-color",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-color",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-color",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-color",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-image",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-image",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-image",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-image",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-opacity",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-opacity",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-opacity",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-opacity",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-origin",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-origin",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-origin",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-origin",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-position",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-position",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-position",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-position",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-repeat",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-repeat",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-repeat",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-repeat",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-rule",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-rule",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-rule",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-rule",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-size",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-fill-size",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "fill-size",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-fill-size",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-align",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-align",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-align",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-align",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-break",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-break",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-break",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-break",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-color",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-color",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-color",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-color",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dash-corner",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-dash-corner",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dash-corner",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-dash-corner",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dash-justify",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-dash-justify",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dash-justify",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-dash-justify",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dasharray",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-dasharray",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dasharray",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-dasharray",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dashoffset",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-dashoffset",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-dashoffset",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-dashoffset",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-image",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-image",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-image",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-image",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-linecap",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-linecap",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-linecap",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-linecap",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-linejoin",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-linejoin",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-linejoin",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-linejoin",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-miterlimit",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-miterlimit",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-miterlimit",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-miterlimit",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-opacity",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-opacity",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-opacity",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-opacity",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-origin",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-origin",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-origin",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-origin",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-position",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-position",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-position",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-position",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-repeat",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-repeat",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-repeat",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-repeat",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-size",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-size",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-size",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-size",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-width",
//         "url": "https://drafts.fxtf.org/fill-stroke/#propdef-stroke-width",
//         "status": "ED",
//         "title": "CSS Fill and Stroke Module Level 3"
//      },
//      {
//         "property": "stroke-width",
//         "url": "https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/#propdef-stroke-width",
//         "status": "FPWD",
//         "title": "CSS Fill and Stroke Module Level 3"
//      }
//   ],
//   "CSS Fonts Module Level 4": [
//      {
//         "property": "font",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-family",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-family",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-family",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-family",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-language-override",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-language-override",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-language-override",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-language-override",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-max-size",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-max-size",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-max-size",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-max-size",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-min-size",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-min-size",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-min-size",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-min-size",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-optical-sizing",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-optical-sizing",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-optical-sizing",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-optical-sizing",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-palette",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-palette",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-palette",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-palette",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-size",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-size",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-size",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-size",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-size-adjust",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-size-adjust",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-size-adjust",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-size-adjust",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-stretch",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-stretch",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-stretch",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-stretch",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-style",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-style",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-style",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-style",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-synthesis",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-synthesis",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-synthesis",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variant-alternates",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variant-alternates",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-variant-alternates",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variant-emoji",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-emoji",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variant-emoji",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-variant-emoji",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variation-settings",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-variation-settings",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-variation-settings",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-variation-settings",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-weight",
//         "url": "https://drafts.csswg.org/css-fonts-4/#propdef-font-weight",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 4"
//      },
//      {
//         "property": "font-weight",
//         "url": "https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/#propdef-font-weight",
//         "status": "WD",
//         "title": "CSS Fonts Module Level 4"
//      }
//   ],
//   "CSS Fonts Module Level 3": [
//      {
//         "property": "font",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-family",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-family",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-family",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-family",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-feature-settings",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-feature-settings",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-feature-settings",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-feature-settings",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-kerning",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-kerning",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-kerning",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-kerning",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-size",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-size",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-size",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-size",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-size-adjust",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-size-adjust",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-size-adjust",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-size-adjust",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-stretch",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-stretch",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-stretch",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-stretch",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-style",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-style",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-style",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-style",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-synthesis",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-synthesis",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-synthesis",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-synthesis",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-caps",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant-caps",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-caps",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant-caps",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-east-asian",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant-east-asian",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-east-asian",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant-east-asian",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-ligatures",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant-ligatures",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-ligatures",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant-ligatures",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-numeric",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant-numeric",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-numeric",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant-numeric",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-position",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-variant-position",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-variant-position",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-variant-position",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-weight",
//         "url": "https://drafts.csswg.org/css-fonts/#propdef-font-weight",
//         "status": "ED",
//         "title": "CSS Fonts Module Level 3"
//      },
//      {
//         "property": "font-weight",
//         "url": "https://www.w3.org/TR/2018/CR-css-fonts-3-20180626/#propdef-font-weight",
//         "status": "CR",
//         "title": "CSS Fonts Module Level 3"
//      }
//   ],
//   "CSS Grid Layout Module Level 1": [
//      {
//         "property": "grid",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-area",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-area",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-area",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-area",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-columns",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-columns",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-columns",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-auto-columns",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-flow",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-flow",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-auto-flow",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-rows",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-rows",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-auto-rows",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-auto-rows",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-column",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-column",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column-end",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-column-end",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-column-end",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column-start",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-column-start",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-column-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-column-start",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-row",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-row",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row-end",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-row-end",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-row-end",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row-start",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-row-start",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-row-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-row-start",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-template",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-template",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-areas",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-template-areas",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-areas",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-template-areas",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-columns",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-template-columns",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-columns",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-template-columns",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-rows",
//         "url": "https://drafts.csswg.org/css-grid/#propdef-grid-template-rows",
//         "status": "ED",
//         "title": "CSS Grid Layout Module Level 1"
//      },
//      {
//         "property": "grid-template-rows",
//         "url": "https://www.w3.org/TR/2017/CR-css-grid-1-20171214/#propdef-grid-template-rows",
//         "status": "CR",
//         "title": "CSS Grid Layout Module Level 1"
//      }
//   ],
//   "CSS Text Module Level 3": [
//      {
//         "property": "hanging-punctuation",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-hanging-punctuation",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "hanging-punctuation",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-hanging-punctuation",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "hyphens",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-hyphens",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "hyphens",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-hyphens",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "letter-spacing",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-letter-spacing",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "letter-spacing",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-letter-spacing",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "line-break",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-line-break",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "line-break",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-line-break",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "overflow-wrap",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-overflow-wrap",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "overflow-wrap",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-overflow-wrap",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "tab-size",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-tab-size",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "tab-size",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-tab-size",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-align",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-align",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align-all",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-align-all",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align-all",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-align-all",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align-last",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-align-last",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-align-last",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-align-last",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-indent",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-indent",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-indent",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-indent",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-justify",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-justify",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-justify",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-justify",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-transform",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-text-transform",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "text-transform",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-text-transform",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "white-space",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-white-space",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "white-space",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-white-space",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-break",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-word-break",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-break",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-word-break",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-spacing",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-word-spacing",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-spacing",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-word-spacing",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-wrap",
//         "url": "https://drafts.csswg.org/css-text-3/#propdef-word-wrap",
//         "status": "ED",
//         "title": "CSS Text Module Level 3"
//      },
//      {
//         "property": "word-wrap",
//         "url": "https://www.w3.org/TR/2017/WD-css-text-3-20170822/#propdef-word-wrap",
//         "status": "WD",
//         "title": "CSS Text Module Level 3"
//      }
//   ],
//   "CSS Text Module Level 4": [
//      {
//         "property": "hyphenate-character",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-hyphenate-character",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-character",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-character",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-chars",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-hyphenate-limit-chars",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-chars",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-chars",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-last",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-hyphenate-limit-last",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-last",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-last",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-lines",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-hyphenate-limit-lines",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-lines",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-lines",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-zone",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-hyphenate-limit-zone",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "hyphenate-limit-zone",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-zone",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-space-collapse",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-text-space-collapse",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-space-collapse",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-text-space-collapse",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-space-trim",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-text-space-trim",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-space-trim",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-text-space-trim",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-spacing",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-text-spacing",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-spacing",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-text-spacing",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-wrap",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-text-wrap",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "text-wrap",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-text-wrap",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "white-space",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-white-space",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "white-space",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-white-space",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-after",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-wrap-after",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-after",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-wrap-after",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-before",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-wrap-before",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-before",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-wrap-before",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-inside",
//         "url": "http://www.w3.org/TR/2015/WD-css-text-4-20150922/#propdef-wrap-inside",
//         "status": "FPWD",
//         "title": "CSS Text Module Level 4"
//      },
//      {
//         "property": "wrap-inside",
//         "url": "https://drafts.csswg.org/css-text-4/#propdef-wrap-inside",
//         "status": "ED",
//         "title": "CSS Text Module Level 4"
//      }
//   ],
//   "CSS Image Values and Replaced Content Module Level 3": [
//      {
//         "property": "image-orientation",
//         "url": "http://www.w3.org/TR/2012/CR-css3-images-20120417/#image-orientation",
//         "status": "CR",
//         "title": "CSS Image Values and Replaced Content Module Level 3"
//      },
//      {
//         "property": "image-resolution",
//         "url": "http://www.w3.org/TR/2012/CR-css3-images-20120417/#image-resolution",
//         "status": "CR",
//         "title": "CSS Image Values and Replaced Content Module Level 3"
//      },
//      {
//         "property": "object-fit",
//         "url": "http://www.w3.org/TR/2012/CR-css3-images-20120417/#object-fit",
//         "status": "CR",
//         "title": "CSS Image Values and Replaced Content Module Level 3"
//      },
//      {
//         "property": "object-position",
//         "url": "http://www.w3.org/TR/2012/CR-css3-images-20120417/#object-position",
//         "status": "CR",
//         "title": "CSS Image Values and Replaced Content Module Level 3"
//      }
//   ],
//   "CSS Image Values and Replaced Content Module Level 4": [
//      {
//         "property": "image-resolution",
//         "url": "https://drafts.csswg.org/css-images-4/#propdef-image-resolution",
//         "status": "ED",
//         "title": "CSS Image Values and Replaced Content Module Level 4"
//      },
//      {
//         "property": "image-resolution",
//         "url": "https://www.w3.org/TR/2017/WD-css-images-4-20170413/#propdef-image-resolution",
//         "status": "WD",
//         "title": "CSS Image Values and Replaced Content Module Level 4"
//      },
//      {
//         "property": "object-fit",
//         "url": "https://drafts.csswg.org/css-images-4/#propdef-object-fit",
//         "status": "ED",
//         "title": "CSS Image Values and Replaced Content Module Level 4"
//      }
//   ],
//   "SVG Markers": [
//      {
//         "property": "marker",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker",
//         "url": "https://svgwg.org/specs/markers/#MarkerProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-end",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerEndProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-end",
//         "url": "https://svgwg.org/specs/markers/#MarkerEndProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-knockout-left",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerKnockoutLeftProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-knockout-left",
//         "url": "https://svgwg.org/specs/markers/#MarkerKnockoutLeftProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-knockout-right",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerKnockoutRightProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-knockout-right",
//         "url": "https://svgwg.org/specs/markers/#MarkerKnockoutRightProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-mid",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerMidProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-mid",
//         "url": "https://svgwg.org/specs/markers/#MarkerMidProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-pattern",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerPatternProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-pattern",
//         "url": "https://svgwg.org/specs/markers/#MarkerPatternProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-segment",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerSegmentProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-segment",
//         "url": "https://svgwg.org/specs/markers/#MarkerSegmentProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-start",
//         "url": "http://www.w3.org/TR/2015/WD-svg-markers-20150409/#MarkerStartProperty",
//         "status": "FPWD",
//         "title": "SVG Markers"
//      },
//      {
//         "property": "marker-start",
//         "url": "https://svgwg.org/specs/markers/#MarkerStartProperty",
//         "status": "ED",
//         "title": "SVG Markers"
//      }
//   ],
//   "Motion Path Module Level 1": [
//      {
//         "property": "offset",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-anchor",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset-anchor",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-anchor",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset-anchor",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-distance",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset-distance",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-distance",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset-distance",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-path",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset-path",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-path",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset-path",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-position",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset-position",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-position",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset-position",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-rotate",
//         "url": "https://drafts.fxtf.org/motion-1/#propdef-offset-rotate",
//         "status": "ED",
//         "title": "Motion Path Module Level 1"
//      },
//      {
//         "property": "offset-rotate",
//         "url": "https://www.w3.org/TR/2017/WD-motion-1-20170711/#propdef-offset-rotate",
//         "status": "WD",
//         "title": "Motion Path Module Level 1"
//      }
//   ],
//   "CSS Paged Media Module Level 3": [
//      {
//         "property": "page",
//         "url": "http://www.w3.org/TR/2013/WD-css3-page-20130314/#page",
//         "status": "WD",
//         "title": "CSS Paged Media Module Level 3"
//      },
//      {
//         "property": "size",
//         "url": "http://www.w3.org/TR/2013/WD-css3-page-20130314/#size",
//         "status": "WD",
//         "title": "CSS Paged Media Module Level 3"
//      }
//   ],
//   "CSS Presentation Levels Module": [
//      {
//         "property": "presentation-level",
//         "url": "http://www.w3.org/TR/2014/NOTE-css3-preslev-20141014/#presentation-level",
//         "status": "NOTE",
//         "title": "CSS Presentation Levels Module"
//      }
//   ],
//   "CSSOM View Module": [
//      {
//         "property": "scroll-behavior",
//         "url": "http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#propdef-scroll-behavior",
//         "status": "WD",
//         "title": "CSSOM View Module"
//      },
//      {
//         "property": "scroll-behavior",
//         "url": "https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior",
//         "status": "ED",
//         "title": "CSSOM View Module"
//      }
//   ],
//   "CSS Scroll Snap Module Level 1": [
//      {
//         "property": "scroll-margin",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-block",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block-end",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-end",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-block-end",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block-start",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-block-start",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-block-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-block-start",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-bottom",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-bottom",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-bottom",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-bottom",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-inline",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline-end",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-end",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-inline-end",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline-start",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-inline-start",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-inline-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-inline-start",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-left",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-left",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-left",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-left",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-right",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-right",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-right",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-right",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-top",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-margin-top",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-margin-top",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-margin-top",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-block",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block-end",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-end",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-block-end",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block-start",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-start",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-block-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-block-start",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-bottom",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-bottom",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-bottom",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-bottom",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-inline",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline-end",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-end",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline-end",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-inline-end",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline-start",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-start",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-inline-start",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-inline-start",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-left",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-left",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-left",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-left",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-right",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-right",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-right",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-right",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-top",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-top",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-padding-top",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-padding-top",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-align",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-align",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-align",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-snap-align",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-stop",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-stop",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-stop",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-snap-stop",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-type",
//         "url": "https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-snap-type",
//         "status": "ED",
//         "title": "CSS Scroll Snap Module Level 1"
//      },
//      {
//         "property": "scroll-snap-type",
//         "url": "https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20171214/#propdef-scroll-snap-type",
//         "status": "CR",
//         "title": "CSS Scroll Snap Module Level 1"
//      }
//   ],
//   "CSS Shapes Module Level 1": [
//      {
//         "property": "shape-image-threshold",
//         "url": "http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/#propdef-shape-image-threshold",
//         "status": "CR",
//         "title": "CSS Shapes Module Level 1"
//      },
//      {
//         "property": "shape-image-threshold",
//         "url": "https://drafts.csswg.org/css-shapes/#propdef-shape-image-threshold",
//         "status": "ED",
//         "title": "CSS Shapes Module Level 1"
//      },
//      {
//         "property": "shape-margin",
//         "url": "http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/#propdef-shape-margin",
//         "status": "CR",
//         "title": "CSS Shapes Module Level 1"
//      },
//      {
//         "property": "shape-margin",
//         "url": "https://drafts.csswg.org/css-shapes/#propdef-shape-margin",
//         "status": "ED",
//         "title": "CSS Shapes Module Level 1"
//      },
//      {
//         "property": "shape-outside",
//         "url": "http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/#propdef-shape-outside",
//         "status": "CR",
//         "title": "CSS Shapes Module Level 1"
//      },
//      {
//         "property": "shape-outside",
//         "url": "https://drafts.csswg.org/css-shapes/#propdef-shape-outside",
//         "status": "ED",
//         "title": "CSS Shapes Module Level 1"
//      }
//   ],
//   "SVG Strokes": [
//      {
//         "property": "stroke",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke",
//         "url": "https://svgwg.org/specs/strokes/#StrokeProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-alignment",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeAlignmentProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-alignment",
//         "url": "https://svgwg.org/specs/strokes/#StrokeAlignmentProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashadjust",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashadjustProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashadjust",
//         "url": "https://svgwg.org/specs/strokes/#StrokeDashadjustProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dasharray",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDasharrayProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dasharray",
//         "url": "https://svgwg.org/specs/strokes/#StrokeDasharrayProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashcorner",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashcornerProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashcorner",
//         "url": "https://svgwg.org/specs/strokes/#StrokeDashcornerProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashoffset",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashoffsetProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-dashoffset",
//         "url": "https://svgwg.org/specs/strokes/#StrokeDashoffsetProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-linecap",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinecapProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-linecap",
//         "url": "https://svgwg.org/specs/strokes/#StrokeLinecapProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-linejoin",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinejoinProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-linejoin",
//         "url": "https://svgwg.org/specs/strokes/#StrokeLinejoinProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-miterlimit",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeMiterlimitProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-miterlimit",
//         "url": "https://svgwg.org/specs/strokes/#StrokeMiterlimitProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-opacity",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeOpacityProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-opacity",
//         "url": "https://svgwg.org/specs/strokes/#StrokeOpacityProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-width",
//         "url": "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeWidthProperty",
//         "status": "FPWD",
//         "title": "SVG Strokes"
//      },
//      {
//         "property": "stroke-width",
//         "url": "https://svgwg.org/specs/strokes/#StrokeWidthProperty",
//         "status": "ED",
//         "title": "SVG Strokes"
//      }
//   ],
//   "CSS Text Decoration Module Level 3": [
//      {
//         "property": "text-decoration",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-color",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-color",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-color",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-color",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-line",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-line",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-line",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-line",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-skip",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-skip",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-style",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-style",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-decoration-style",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-decoration-style",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-color",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-color",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-color",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-color",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-position",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-position",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-position",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-position",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-style",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-style",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-emphasis-style",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-emphasis-style",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-shadow",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-shadow",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-shadow",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-shadow",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-underline-position",
//         "url": "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-underline-position",
//         "status": "CR",
//         "title": "CSS Text Decoration Module Level 3"
//      },
//      {
//         "property": "text-underline-position",
//         "url": "https://drafts.csswg.org/css-text-decor-3/#propdef-text-underline-position",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 3"
//      }
//   ],
//   "CSS Text Decoration Module Level 4": [
//      {
//         "property": "text-decoration-line",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-line",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-skip",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-skip",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-skip",
//         "url": "https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/#propdef-text-decoration-skip",
//         "status": "FPWD",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-skip-ink",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-skip-ink",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-skip-ink",
//         "url": "https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/#propdef-text-decoration-skip-ink",
//         "status": "FPWD",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-width",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-width",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-decoration-width",
//         "url": "https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/#propdef-text-decoration-width",
//         "status": "FPWD",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-emphasis-skip",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-emphasis-skip",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-emphasis-skip",
//         "url": "https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/#propdef-text-emphasis-skip",
//         "status": "FPWD",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-underline-offset",
//         "url": "https://drafts.csswg.org/css-text-decor-4/#propdef-text-underline-offset",
//         "status": "ED",
//         "title": "CSS Text Decoration Module Level 4"
//      },
//      {
//         "property": "text-underline-offset",
//         "url": "https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/#propdef-text-underline-offset",
//         "status": "FPWD",
//         "title": "CSS Text Decoration Module Level 4"
//      }
//   ],
//   "CSS Transforms Module Level 1": [
//      {
//         "property": "transform",
//         "url": "https://drafts.csswg.org/css-transforms/#propdef-transform",
//         "status": "ED",
//         "title": "CSS Transforms Module Level 1"
//      },
//      {
//         "property": "transform",
//         "url": "https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/#propdef-transform",
//         "status": "WD",
//         "title": "CSS Transforms Module Level 1"
//      },
//      {
//         "property": "transform-box",
//         "url": "https://drafts.csswg.org/css-transforms/#propdef-transform-box",
//         "status": "ED",
//         "title": "CSS Transforms Module Level 1"
//      },
//      {
//         "property": "transform-box",
//         "url": "https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/#propdef-transform-box",
//         "status": "WD",
//         "title": "CSS Transforms Module Level 1"
//      },
//      {
//         "property": "transform-origin",
//         "url": "https://drafts.csswg.org/css-transforms/#propdef-transform-origin",
//         "status": "ED",
//         "title": "CSS Transforms Module Level 1"
//      },
//      {
//         "property": "transform-origin",
//         "url": "https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/#propdef-transform-origin",
//         "status": "WD",
//         "title": "CSS Transforms Module Level 1"
//      }
//   ],
//   "CSS Transitions": [
//      {
//         "property": "transition",
//         "url": "https://drafts.csswg.org/css-transitions/#propdef-transition",
//         "status": "ED",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition",
//         "url": "https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#propdef-transition",
//         "status": "WD",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-delay",
//         "url": "https://drafts.csswg.org/css-transitions/#propdef-transition-delay",
//         "status": "ED",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-delay",
//         "url": "https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#propdef-transition-delay",
//         "status": "WD",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-duration",
//         "url": "https://drafts.csswg.org/css-transitions/#propdef-transition-duration",
//         "status": "ED",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-duration",
//         "url": "https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#propdef-transition-duration",
//         "status": "WD",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-property",
//         "url": "https://drafts.csswg.org/css-transitions/#propdef-transition-property",
//         "status": "ED",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-property",
//         "url": "https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#propdef-transition-property",
//         "status": "WD",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-timing-function",
//         "url": "https://drafts.csswg.org/css-transitions/#propdef-transition-timing-function",
//         "status": "ED",
//         "title": "CSS Transitions"
//      },
//      {
//         "property": "transition-timing-function",
//         "url": "https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#propdef-transition-timing-function",
//         "status": "WD",
//         "title": "CSS Transitions"
//      }
//   ],
//   "CSS Will Change Module Level 1": [
//      {
//         "property": "will-change",
//         "url": "http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/#propdef-will-change",
//         "status": "CR",
//         "title": "CSS Will Change Module Level 1"
//      },
//      {
//         "property": "will-change",
//         "url": "https://drafts.csswg.org/css-will-change/#propdef-will-change",
//         "status": "ED",
//         "title": "CSS Will Change Module Level 1"
//      }
//   ],
//   "CSS Exclusions Module Level 1": [
//      {
//         "property": "wrap-flow",
//         "url": "http://www.w3.org/TR/2015/WD-css3-exclusions-20150115/#propdef-wrap-flow",
//         "status": "WD",
//         "title": "CSS Exclusions Module Level 1"
//      },
//      {
//         "property": "wrap-flow",
//         "url": "https://drafts.csswg.org/css-exclusions/#propdef-wrap-flow",
//         "status": "ED",
//         "title": "CSS Exclusions Module Level 1"
//      },
//      {
//         "property": "wrap-through",
//         "url": "http://www.w3.org/TR/2015/WD-css3-exclusions-20150115/#propdef-wrap-through",
//         "status": "WD",
//         "title": "CSS Exclusions Module Level 1"
//      },
//      {
//         "property": "wrap-through",
//         "url": "https://drafts.csswg.org/css-exclusions/#propdef-wrap-through",
//         "status": "ED",
//         "title": "CSS Exclusions Module Level 1"
//      }
//   ]
// }

// const statuses = [
//   'ED',   // Editors' Draft (not a W3C Technical Report)
//   'FPWD', // First Public Working Draft
//   'WD',   // Working Draft
//   'LC',   // Last Call Working Draft
//   'CR',   // Candidate Recommendation
//   'PR',   // Proposed Recommendation
//   'REC',  // Recommendation
//   'NOTE', // Working Group Note
// ]

// Descriptors - https://www.w3.org/Style/CSS/all-descriptors
// Updated - 30 Jun 2018
// 
// const descriptors = [
//   {
//     descriptor: '(2)',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-min-zoom',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: '(2)',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-width',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: '(3)',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-max-zoom',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: '5.9. The orientation descriptor',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-orientation',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'additive-symbols',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-additive-symbols',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'additive-symbols',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-additive-symbols',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'any-hover',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-any-hover',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'any-hover',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-any-hover',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'any-pointer',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-any-pointer',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'any-pointer',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-any-pointer',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'Appendix A. Changes',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-zoom',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'aspect-ratio',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-aspect-ratio',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'aspect-ratio',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-aspect-ratio',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'base-palette',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-palette-values-base-palette',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'bleed',
//     URL: 'http://dev.w3.org/csswg/css3-page/#descdef-page-bleed',
//     status: 'ED',
//     specification: 'CSS Paged Media Module Level 3',
//   },
//   {
//     descriptor: 'color-gamut',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-color-gamut',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'color-gamut',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-color-gamut',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'color',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-color',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'color',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-color',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'color-index',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-color-index',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'color-index',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-color-index',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-aspect-ratio',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-device-aspect-ratio',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-aspect-ratio',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-device-aspect-ratio',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-height',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-device-height',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-height',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-device-height',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-width',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-device-width',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'device-width',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-device-width',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'fallback',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-fallback',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'fallback',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-fallback',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'font-display',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-font-display',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-display',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-feature-values-font-display',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-family',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-family',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-family',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-font-family',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-family',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-palette-values-font-family',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-family',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-family',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-feature-settings',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-feature-settings',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-feature-settings',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-feature-settings',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-stretch',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-stretch',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-stretch',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-font-stretch',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-stretch',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-stretch',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-style',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-style',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-style',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-font-style',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-style',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-style',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-variant',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-variant',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-variant',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-variant',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-weight',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-font-weight',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'font-weight',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-font-weight',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'font-weight',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-font-weight',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'grid',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-grid',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'grid',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-grid',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'height',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-height',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'height',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-height',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'height',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-height',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'hover',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-hover',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'hover',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-hover',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: '&lt;integer>',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-palette-values-integer',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'marks',
//     URL: 'http://dev.w3.org/csswg/css3-page/#descdef-page-marks',
//     status: 'ED',
//     specification: 'CSS Paged Media Module Level 3',
//   },
//   {
//     descriptor: 'max-height',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-max-height',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'max-width',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-max-width',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'max-zoom',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-max-zoom',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'min-height',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-min-height',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'min-width',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-min-width',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'min-zoom',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-min-zoom',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'monochrome',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-monochrome',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'monochrome',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-monochrome',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'negative',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-negative',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'negative',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-negative',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'orientation',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-orientation',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'orientation',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-orientation',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'orientation',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-orientation',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'overflow-block',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-overflow-block',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'overflow-block',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-overflow-block',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'overflow-inline',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-overflow-inline',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'overflow-inline',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-overflow-inline',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'pad',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-pad',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'pad',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-pad',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'pointer',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-pointer',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'pointer',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-pointer',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'prefix',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-prefix',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'prefix',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-prefix',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'range',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-range',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'range',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-range',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'rendering-intent',
//     URL: 'https://drafts.csswg.org/css-color/#descdef-color-profile-rendering-intent',
//     status: 'ED',
//     specification: 'CSS Color Module Level 4',
//   },
//   {
//     descriptor: 'resolution',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-resolution',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'resolution',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-resolution',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'scan',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-scan',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'scan',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-scan',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'scripting',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-scripting',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'scripting',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-scripting',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'shape',
//     URL: 'http://dev.w3.org/csswg/css-round-display-1/#descdef-media-shape',
//     status: 'ED',
//     specification: 'CSS Round Display Level 1',
//   },
//   {
//     descriptor: 'shape',
//     URL: 'http://www.w3.org/TR/css-round-display-1/#descdef-media-shape',
//     status: 'WD',
//     specification: 'CSS Round Display Level 1',
//   },
//   {
//     descriptor: 'size',
//     URL: 'http://dev.w3.org/csswg/css3-page/#descdef-page-size',
//     status: 'ED',
//     specification: 'CSS Paged Media Module Level 3',
//   },
//   {
//     descriptor: 'speak-as',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-speak-as',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'speak-as',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-speak-as',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'src',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-src',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'src',
//     URL: 'http://dev.w3.org/csswg/css-fonts-4/#descdef-font-face-src',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 4',
//   },
//   {
//     descriptor: 'src',
//     URL: 'https://drafts.csswg.org/css-color/#descdef-color-profile-src',
//     status: 'ED',
//     specification: 'CSS Color Module Level 4',
//   },
//   {
//     descriptor: 'src',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-src',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'suffix',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-suffix',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'suffix',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-suffix',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'symbols',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-symbols',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'symbols',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-symbols',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'system',
//     URL: 'http://dev.w3.org/csswg/css-counter-styles-3/#descdef-counter-style-system',
//     status: 'ED',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: 'system',
//     URL: 'http://www.w3.org/TR/css-counter-styles-3/#descdef-counter-style-system',
//     status: 'CR',
//     specification: 'CSS Counter Styles Level 3',
//   },
//   {
//     descriptor: ' The user-scalable property',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-user-zoom',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: ' The width and height properties',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-height',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: ' The width and height properties',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-max-height',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: ' The width and height properties',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-max-width',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: ' The width and height properties',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-min-height',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: ' The width and height properties',
//     URL: 'http://www.w3.org/TR/css-device-adapt-1/#descdef-viewport-min-width',
//     status: 'WD',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'unicode-range',
//     URL: 'http://dev.w3.org/csswg/css3-fonts/#descdef-unicode-range',
//     status: 'ED',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'unicode-range',
//     URL: 'http://www.w3.org/TR/css3-fonts#descdef-unicode-range',
//     status: 'CR',
//     specification: 'CSS Fonts Module Level 3',
//   },
//   {
//     descriptor: 'update',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-update',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'update',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-update',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'user-zoom',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-user-zoom',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'viewport-fit',
//     URL: 'http://dev.w3.org/csswg/css-round-display-1/#descdef-viewport-viewport-fit',
//     status: 'ED',
//     specification: 'CSS Round Display Level 1',
//   },
//   {
//     descriptor: 'viewport-fit',
//     URL: 'http://www.w3.org/TR/css-round-display-1/#descdef-viewport-viewport-fit',
//     status: 'WD',
//     specification: 'CSS Round Display Level 1',
//   },
//   {
//     descriptor: 'width',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-width',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
//   {
//     descriptor: 'width',
//     URL: 'http://dev.w3.org/csswg/mediaqueries-4/#descdef-media-width',
//     status: 'ED',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'width',
//     URL: 'http://www.w3.org/TR/mediaqueries-4/#descdef-media-width',
//     status: 'WD',
//     specification: 'Media Queries Level 4',
//   },
//   {
//     descriptor: 'zoom',
//     URL: 'http://dev.w3.org/csswg/css-device-adapt/#descdef-viewport-zoom',
//     status: 'ED',
//     specification: 'CSS Device Adaptation Module Level 1',
//   },
// ]
