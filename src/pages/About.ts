import { Lightning, Utils, Router } from '@lightningjs/sdk'

interface AboutTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: {
    Logo: object
    Mystery: object
    Text: object
  }
}

export interface AboutTypeConfig extends Lightning.Component.TypeConfig {
    IsPage: true;
}



export default class About
  extends Lightning.Component<AboutTemplateSpec,AboutTypeConfig>
  implements Lightning.Component.ImplementTemplateSpec<AboutTemplateSpec>
{
  /*
   * The following properties exist to make it more convenient to access elements
   * below in a type-safe way. They are optional.
   *
   * See https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/Components/TemplateSpecs?id=using-a-template-spec
   * for more information.
   */
  readonly Background = this.getByRef('Background')!
  readonly Logo = this.Background.getByRef('Logo')!
  readonly Text = this.Background.getByRef('Text')!
  readonly Mystery = this.Background.getByRef('Mystery')!

  static override _template(): Lightning.Component.Template<AboutTemplateSpec> {
    return {
      w: 1920,
      h: 1080,
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
        Logo: {
          mountX: 0.5,
          mountY: 1,
          x: 960,
          y: 600,
          src: Utils.asset('images/logo.png'),
        },
        Mystery: {
          x: 930,
          y: 400,
          w: 150,
          h: 150,
          scale: 0,
          src: Utils.asset('images/mystery.png'),
        },
        Text: {
          mount: 0.5,
          x: 960,
          y: 720,
          text: {
            text: "About",
            fontFace: 'Regular',
            fontSize: 64,
            textColor: 0xbbffffff,
          },
        },
      },
    }
  }

  static getFonts() {
    return [
      {
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf') as string,
      },
    ]
  }

  override _handleEnter() {
    console.log('Route to splash');
    Router.navigate('splash', true);
  }

  override _init() {
    console.log("INIT :: About page");
  }
}
