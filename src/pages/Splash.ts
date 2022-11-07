import { Lightning, Utils, Router } from '@lightningjs/sdk'

interface SplashTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: {
    Logo: object
    Mystery: object
    Text: object
  }
}

export interface SplashTypeConfig extends Lightning.Component.TypeConfig {
    IsPage: true;
}


export default class Splash
  extends Lightning.Component<SplashTemplateSpec,SplashTypeConfig>
  implements Lightning.Component.ImplementTemplateSpec<SplashTemplateSpec>
{
  readonly Background = this.getByRef('Background')!
  readonly Logo = this.Background.getByRef('Logo')!
  readonly Text = this.Background.getByRef('Text')!
  readonly Mystery = this.Background.getByRef('Mystery')!

  static override _template(): Lightning.Component.Template<SplashTemplateSpec> {
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
            text: "Splash",
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
    console.log('Route to about');
    Router.navigate('about');
  }

  override _init() {
    console.log("INIT :: Splash page");
  }
}
