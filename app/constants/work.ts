import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'IIUM KICT',
    subtitle: 'Computer Science Student',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'NEURODRIVE',
    subtitle: 'EEG Driving Anxiety Detection',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'MasjidOS 26',
    subtitle: 'Smart Mosque Management System',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'AKHI Club IIUM',
    subtitle: 'Official Club Website Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'rewwsyaydee.tech',
    subtitle: 'Building things that work',
    position: 'right',
  }
];
