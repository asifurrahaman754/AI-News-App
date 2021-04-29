import React from "react";
import {
  InitContainer,
  InitCardtitle,
  InitInfoContainer,
  InitInfoHead,
  InitInfo,
  InitCardTextContainer,
  InitInfoText,
} from "./InitCom";

export default function Initial({ infoCard: { color, title, text, info } }) {
  return (
    <InitContainer color={color}>
      <InitCardtitle>{title}</InitCardtitle>
      {info && (
        <InitInfoContainer>
          <InitInfoHead>{title.split(" ")[2]}</InitInfoHead>
          <InitInfo>{info}</InitInfo>
        </InitInfoContainer>
      )}
      <InitCardTextContainer>
        <InitInfoHead>Try saying:</InitInfoHead>
        <InitInfoText>"{text}"</InitInfoText>
      </InitCardTextContainer>
    </InitContainer>
  );
}
