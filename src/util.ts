function operateDom(): void {
  const dom = document.createElement('div');
  dom.innerText = 'value by util.ts file666';
  document.body.appendChild(dom);
}

operateDom();
