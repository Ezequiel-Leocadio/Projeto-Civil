export function ipBackend(ip) {
  return {
    type: '@all/IP',
    ip,
  };
}

export function acessoExterno(ip) {
  return {
    type: '@all/ACESSO_EXTERNO',
    ip,
  };
}

export function acessoExternoSetIp(ip) {
  return {
    type: '@all/ACESSO_EXTERNO_IP',
    ip,
  };
}

export function load(value) {
  return {
    type: '@all/LOAD',
    value,
  };
}
