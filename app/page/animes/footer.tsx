"use client";

import { Layout } from 'antd';

export default function Footer() {
  return (
    <Layout.Footer style={{
      background: '#222', color: '#fff', textAlign: 'center', padding: '24px 16px'
    }}>
      <div style={{ marginBottom: 8 }}>
        <a href="mailto:your@email.com">Email</a> |
        <a href="https://github.com/yourprofile">GitHub</a> |
        <a href="https://twitter.com/yourprofile">Twitter</a>
      </div>
      <blockquote style={{ color: '#f5e077', margin: 0 }}>
        “If you don’t take risks, you can’t create a future.” — Monkey D. Luffy
      </blockquote>
    </Layout.Footer>
  );
}
