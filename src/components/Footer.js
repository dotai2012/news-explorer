import React from 'react';
import { Container } from 'semantic-ui-react';

export default function Footer() {
  return (
    <Container text>
      <p>
        All news are taken from NewsAPI. You can get your own by going here: <a href="https://newsapi.org">https://newsapi.org</a>
      </p>
    </Container>
  );
}
