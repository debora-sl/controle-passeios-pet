interface HeadProps{
  title:string
  //? não é obrigatório
  description?: string
}

export function Head({title, description=''}:HeadProps) {
  document.title = `CPP | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}

