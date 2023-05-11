import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(port).then(async () => {
    console.log(`\x1b[36m================================\x1b[0m`);
    console.log(`\x1b[1mServer started on port \x1b[36m${port}!\x1b[0m`);
    console.log(`requests being served at ➤  \x1b[1mhttp://localhost:${port}\x1b[0m`);
    console.log(`\x1b[36m================================\x1b[0m`);
  });
}
bootstrap();
