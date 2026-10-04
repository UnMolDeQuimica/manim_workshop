import { defineEcConfig } from 'astro-expressive-code';
import { pluginTypewriter } from 'expressive-code-typewriter';

export default defineEcConfig({
  plugins: [pluginTypewriter({
        showReplayButton: false,
    })],
});