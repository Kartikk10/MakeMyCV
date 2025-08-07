import React from "react";
import LayoutControls from "./LayoutControls";
import ColorCustomizer from "./ColorCustomizer";
import FontSelector from "./FontSelector";

function CustomizeSection({
  setSelectedLayout,
  accentColor,
  onAccentColorChange,
  selectedFont,
  onSelectedFontChange,
  textColor
}) {
  return (
    <div className="flex flex-col gap-y-7">
      <LayoutControls
      setSelectedLayout={setSelectedLayout}
        accentColor={accentColor}
        onAccentColorChange={onAccentColorChange}
      />
      <ColorCustomizer
        accentColor={accentColor}
        onAccentColorChange={onAccentColorChange}
      />
      <FontSelector
        accentColor={accentColor}
        selectedFont={selectedFont}
        onSelectedFontChange={onSelectedFontChange}
        textColor={textColor}
      />
    </div>
  );
}

export default CustomizeSection;
