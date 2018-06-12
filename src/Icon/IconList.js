// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import * as Icons from "../icons";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  border-radius: ${defaultTokens.borderRadiusLarge};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 130px;
  background-color: ${defaultTokens.paletteCloudLight};
  padding: ${defaultTokens.spaceLarge};
  margin-bottom: ${defaultTokens.spaceLarge};
  border-radius: ${defaultTokens.borderRadiusLarge};
`;

const IconName = styled.span`
  margin-top: ${defaultTokens.spaceSmall};
  color: ${defaultTokens.paletteInkDark};
  font-size: ${defaultTokens.fontSizeTextSmall};
  font-weight: ${defaultTokens.fontWeightBold};
`;

const IconList = () => (
  <List>
    {Object.keys(Icons).map(icon => {
      const Icon = Icons[icon];
      const iconName = `<${icon} />`;
      return (
        <Container key={icon}>
          <Icon size="large" color="primary" />
          <IconName>{iconName}</IconName>
        </Container>
      );
    })}
  </List>
);

export default IconList;
