// src/lib/geometryUtils.ts
import { BufferGeometry } from 'three';

export function toConvexProps(geometry: BufferGeometry) {
  const vertices: [number, number, number][] = [];
  const faces: number[][] = [];
  const positions = geometry.attributes.position.array;

  for (let i = 0; i < positions.length; i += 3) {
    vertices.push([positions[i], positions[i + 1], positions[i + 2]]);
  }

  if (geometry.index) {
    const indices = geometry.index.array;
    for (let i = 0; i < indices.length; i += 3) {
      faces.push([indices[i], indices[i + 1], indices[i + 2]]);
    }
  } else {
    for (let i = 0; i < positions.length / 3; i += 3) {
      faces.push([i, i + 1, i + 2]);
    }
  }

  return { vertices, faces };
}
