"use client";

import { Card, Avatar, Tag, Typography } from 'antd';
import StrawHatCrew from './members';
const { Title, Text } = Typography;

export default function StrawHatCrewPage() {
  return (
    <div style={{ background: '#FFCD00', padding: '30px' }}>
      <Title level={2} style={{ marginBottom: 32, textAlign: 'left' }}>
        Straw Hat Crew Personas
      </Title>

      <StrawHatCrew />

    </div>
  );
}
