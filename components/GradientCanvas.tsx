"use client";

import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// The published prop set is broader than the library's exported types — cast loosely.
const SG = ShaderGradient as unknown as React.FC<Record<string, unknown>>;

const gradientProps: Record<string, unknown> = {
  control: "props",
  animate: "on",
  axesHelper: "off",
  brightness: 0,
  cAzimuthAngle: 180,
  cDistance: 5.1,
  cPolarAngle: 90,
  cameraZoom: 1,
  // Brand gradient palette — matches the homepage "DATA 01" section background.
  color1: "#80AFE8",
  color2: "#3969C4",
  color3: "#020062",
  destination: "onCanvas",
  embedMode: "off",
  envPreset: "city",
  format: "gif",
  fov: 45,
  frameRate: 10,
  gizmoHelper: "hide",
  grain: "off",
  lightType: "3d",
  pixelDensity: 1.6,
  positionX: -0.4,
  positionY: 0,
  positionZ: 0,
  range: "enabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  shader: "defaults",
  type: "waterPlane",
  uAmplitude: 1,
  uDensity: 0.5,
  uFrequency: 5.5,
  uSpeed: 0.1,
  uStrength: 2.4,
  uTime: 0,
  wireframe: false,
};

export default function GradientCanvas() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <SG {...gradientProps} />
    </ShaderGradientCanvas>
  );
}
