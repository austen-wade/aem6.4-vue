# Adobe Experience Manager with Vue
[This project was setup using Infield Digital's AEM with Webpack setup.](https://github.com/infielddigital/aem-webpack-example)

## Getting Started
Vue components are stored either in `webpack.resolve/js` for global availability or `webpack.module` folders inside of invidual components. Once you've built the project from the root folder using Maven, you can run AEM Front and Webpack from the `webpack.core` folder, [found here](https://github.com/austen-wade/aem6.4-vue/tree/master/ui.apps/src/main), with the `npm run start` command.

[See Infield Digital's aem-webpack-example repo for more instruction on how Webpack integrates with AEM](https://github.com/infielddigital/aem-webpack-example)

## Connecting AEM to Vue
[Example component](https://github.com/austen-wade/aem6.4-vue/tree/master/ui.apps/src/main/content/jcr_root/apps/aem-vue/components/content/helloworld)

Each `webpack.module` folder should have an `index.js` file that eventually gets bundled into the resulting Javascript of the site. This is where you should be defining Vue components for corresponding AEM components.

Vue components can be registered inside of the `index.js` file `Vue.component ('my-example', { ... })'`, however, complications arise when using Single File Components as the Vue root isn't able to pass AEM props to the SFCs directly from HTL. To circumvent this, a "Connector Component" can be used. The example [Hello World Component](https://github.com/austen-wade/aem6.4-vue/tree/master/ui.apps/src/main/content/jcr_root/apps/aem-vue/components/content/helloworld) uses such an approach. The Connector Component can be used to simply pass props to a single SFC or create more complex setups with multiple components/slots.

To render Vue components, the function `activateVue()` can be called. This is a globally available function, stored inside of `webpack.resolve/utils.js` ( can be imported using `import { activateVue } from 'js/utils'` ).

## Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps
* ui.tests: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* ui.launcher: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle