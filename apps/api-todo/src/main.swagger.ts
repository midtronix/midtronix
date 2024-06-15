import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function configureSwagger(
  app: INestApplication,
  options: Partial<OpenAPIObject>
) {
  const docBuilder = new DocumentBuilder()
    .setTitle(options.info.title)
    .setDescription(options.info.description)
    .setVersion(options.info.version);

  for (const tag of options.tags || ['API']) {
    docBuilder.addTag(tag.toString());
  }

  const config = docBuilder.build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCss: ``,
    customSiteTitle: options.info.title,
  });
}
