const context = [];
const ROOT = document.querySelector("#app")




async function usePages(){
  const T = await import("../pages/index.js").then(module => module.default)
  return T
}

async function useTags(){
  const P = await import("../components/index.js").then(module => module.default)
  return P  
}


function app() {
  const ctxApp = {
    pathname: location.pathname,
    pathCompleto: location.pathname.split("/"),
    href: location.href,
    document: document,
  };
  return ctxApp;
}

function search(props){
  try{
    const search = window.location.pathname.split("/")

    if(props === "pathname"){
      return location.pathname
    }
  
    return search[props]

  }catch{
    console.log("campo invalido")
  }


}

const Emitter = {
  events: {},

  on(event, cb) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(cb);
  },

  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

function useAlifer(props) {
  let state = { props };

  function setState(newState) {
    state.props = newState;
  }

  return [state, setState];
}

const useEffect = (fn) => {
  const execute = () => {
    context.push(execute);
    try {
      fn();
    } finally {
      context.pop();
    }
  };
  execute();
};

function navigatorTo(path) {
  history.pushState(null, null, path);
  roteamento();
}

const useMemo = (fn) => {
  let memoized;
  effect(() => {
    if (memoized) {
      memoized.set(fn());
    } else {
      memoized = state(fn());
    }
  });
  return memoized.get;
};

const useState = (initialValue) => ({
  _subscribers: new Set(),
  _value: initialValue,
  get: function () {
    const current = context.at(-1);
    if (current) {
      this._subscribers.add(current);
    }
    return this._value;
  },
  set: function (value) {
    if (this._value === value) {
      return;
    }
    this._value = value;
    this._subscribers.forEach((sub) => sub());
  },
});

function JSONToCSV(objArray, keys) {
  return [
    keys.join(","),
    ...objArray.map((row) => keys.map((k) => row[k] || "").join(",")),
  ].join("\n");
}

async function CSVToJSON(url, ct) {
  const response = await fetch(url, {
    headers: {
      ct,
    },
  });
  const data = await response.text();

  const lines = data.split("\n");
  const keys = lines[0].split(";");

  return lines.slice(1).map((line) => {
    return line.split(";").reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
}

function Alert(props) {
  alert(props);
}

function addBanco(nome, props) {
  const link = JSON.parse(localStorage.getItem(nome) || "[]");
  link.push(props);
  localStorage.setItem(nome, JSON.stringify(link));
}

function dbGetItem(props) {
  return JSON.parse(window.localStorage.getItem(props));
}

function dbSetItem(name, props) {
  window.localStorage.setItem(name, JSON.stringify(props));
}

async function addComponet(tag, props) {
  document.querySelector(await tag).innerHTML += await props;
}

async function Render(tag, props) {
  document.querySelector(await tag).innerHTML = await props();
}

async function atualizarComp(tag, props) {
  document.querySelector(await tag).innerHTML = await props();
}

async function Api(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const valorDta = await data;
    return valorDta;
  } catch {
    return null;
  }
}

function autoExecultar(props) {
  Function("return " + props)();
}

function backup(props, tipo, textNomeArqDow) {
  let blob = new Blob([`${props}`], { type: `${tipo}` });
  const link = window.document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `${textNomeArqDow || "export.txt"}`;
  link.click();
  window.URL.revokeObjectURL(link.href);
}

function gerarId() {
  const id = Math.random().toString(32).substr(2, 9);
  return id;
}

function gerarQueryString(props) {
  const texto = JSON.stringify(props);
  const parametroQyuery = `?data=${texto}`;
  return parametroQyuery;
}

async function useStyles(props) {
  console.log(props);
  document.querySelector(await "style").innerHTML = await props;
}

function useHeade(props) {
  document.querySelector("head").innerHTML += props["settings"];
}

function userTagsComp(componentDOM, component) {   
 

  try {
    const DOM = componentDOM.match(/<(comp-[a-z]+)/g)
    if (!DOM) {
      console.log("Nenhuma tag comp- foi encontrada na página");
      return;
    } 



    DOM.forEach(async (elem, i) => {   
      const compAlgo = elem.match(/(comp-[a-z]+)/g)[0];
      const elementDom = document.querySelector(compAlgo);
      if (!elementDom) {
        console.log(`Não foi possível encontrar a tag ${compAlgo}`);
        return;
      }
      const attributes = Object.entries(elementDom.dataset).reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {}
      );
   
      const newTag = document.createElement(`${compAlgo}-${i}`);   
      elementDom.parentNode.replaceChild(newTag, elementDom);
      newTag.innerHTML = component[compAlgo](attributes);
    

      const tagNova = document.querySelector(`${compAlgo}-${i}`);
      Object.entries(attributes).forEach(([key, value]) => {
        tagNova.setAttribute(key, value);
      });
    });
  } catch (error) {
    console.error(error);
  }




}

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


async function loadComponents(componentDOM, componentUrls) {

  if (typeof componentDOM !== "string") {
    throw new Error("O argumento componentDOM deve ser uma string contendo HTML válido.");
  }
  if (typeof componentUrls !== "object" || Object.keys(componentUrls).length === 0) {
    throw new Error("O argumento componentUrls deve ser um objeto contendo URLs para os arquivos de componente correspondentes.");
  }

  async function fetchComponent(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      return html;
    } catch (error) {
      throw new Error(`Não foi possível buscar o componente em ${url}. Erro: ${error.message}`);
    }
  }

  const componentTags = componentDOM.match(/<(comp-[a-z]+)/g);
  if (!componentTags) {
    console.log("Nenhuma tag comp- foi encontrada na página");
    return;
  }

  for (let i = 0; i < componentTags.length; i++) {
    const componentTag = componentTags[i];
    const componentName = componentTag.match(/(comp-[a-z]+)/g)[0];
    const componentHtml = await fetchComponent(componentUrls[componentName]);

    const parentElement = document.querySelector(componentName);
    if (!parentElement) {
      console.log(`Não foi possível encontrar a tag ${componentName}`);
      continue;
    }

    const attributes = Object.fromEntries(Object.entries(parentElement.dataset));



    try {
      const newElement = document.createElement(`${componentName}-${i}`);
      parentElement.parentNode.replaceChild(newElement, parentElement);
      newElement.innerHTML = componentHtml;

     

      const childElement = document.querySelector(`${componentName}-${i}`);
      Object.entries(attributes).forEach(([key, value]) => {
        childElement.setAttribute(key, value);
      });

     
    } catch (error) {
      console.error(`Não foi possível substituir a tag ${componentName}. Erro: ${error.message}`);
    }
      

  }
  
  const scripts = document.querySelectorAll("script:not([id])");

       
  scripts.forEach(script => {
    const newScript = document.createElement('script');
    newScript.type = "module";
    newScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild(newScript, script);
  });

}



function RouterTemplate(componentsPages, component) {
  const titleEl = document.querySelector("title");

  const componentCache = {};
  const maxCacheSize = 50; // Limita o tamanho do cache para 50 componentes

  async function fetchComponent(valor) {
    if (componentCache[valor]) {
      return componentCache[valor];
    }
    try {
      const module = await fetch(valor);
      const component = await module.text();
      componentCache[valor] = component;
      // Remove o componente mais antigo do cache se o tamanho máximo for excedido
      if (Object.keys(componentCache).length > maxCacheSize) {
        delete componentCache[Object.keys(componentCache)[0]];
      }
      return component;
    } catch (error) {
      console.error(error);
      return '<h1>Error fetching component</h1>';
    }
  }

  async function route() {
    const hash = location.hash.replace("#", "");
    const pathname = location.pathname.split("/")[1];
    const URL = hash || pathname;

    let currentPage;
    let currentName;

    if (URL === "/" || URL === "") {
      currentName = Object.keys(componentsPages)[0];
    } else if (componentsPages[URL]) {
      currentName = URL;
    } else {
      console.log(currentPage)
      currentName = "erro";
    }

    currentPage = await fetchComponent(componentsPages[currentName]);



    ROOT.innerHTML = currentPage
    titleEl.textContent = currentName;


  
   
    loadComponents(currentPage, component);
  }

  function handleClick(e) {
    const target = e.target;
    if (target.matches("[data-href]")) {
      e.preventDefault();
      const href = target.dataset.href;
      history.pushState(null, null, href);
      route();
    }
  }

  document.body.addEventListener("click", debounce(handleClick, 200));
  window.addEventListener("popstate", route);
  route();
}


function Router(componentsPages, component) {
  const appEl = document.querySelector("#app");
  const titleEl = document.querySelector("title");
  const cache = {};

  function getOrRenderComponent(componentCache) {
    const componentName = componentCache.name;
    titleEl.innerText = componentName;
  
    if (cache[componentName]) {
      return cache[componentName];
    }
  
    const componentDOM = componentCache();
  
    // Adicionar o novo componente ao cache
    cache[componentName] = componentDOM;
  
    // Limitar o tamanho do cache a 10 componentes
    const cacheSize = Object.keys(cache).length;
    const maxCacheSize = 10;
    if (cacheSize > maxCacheSize) {
      const oldestComponentName = Object.keys(cache)[0];
      delete cache[oldestComponentName];
    }
  
    return componentDOM;
  }
 

async  function route() {
    const hash = location.hash.replace("#", "");
    const pathname = location.pathname.split("/")[1];
    const URL = hash || pathname;

    let currentPage;
    let currentName;

    if (URL === "/" || URL === "") {
      currentPage = getOrRenderComponent(Object.keys(componentsPages)[0]);
    } else if (componentsPages[URL]) {    
      currentPage = getOrRenderComponent(currentName = URL);
    } else { 
      currentPage = getOrRenderComponent(currentName = "erro");
    }

    appEl.innerHTML = currentPage;

    userTagsComp(currentPage, component);
}

  window.addEventListener("popstate", route);

  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      route();
    }
  }

  document.body.addEventListener("click", debounce(handleClick, 200));

  route();
}


export {
  Alert,
  autoExecultar,
  navigatorTo,
  dbSetItem,
  dbGetItem,
  atualizarComp,
  addComponet,
  Api,
  addBanco,
  gerarId,
  backup,
  gerarQueryString,
  Router,
  useState,
  useEffect,
  useMemo,
  app,
  Emitter,
  useAlifer,
  Render,
  JSONToCSV,
  CSVToJSON,
  useStyles,
  useHeade,
  RouterTemplate,
  search,
  usePages,
  useTags

};
