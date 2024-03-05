export function validateTextField(element: string, options: { min?: number, max?: number } = {}): number {
    const ELEMENT: HTMLInputElement | null = document.getElementById(element) as HTMLInputElement
    const { min = 0, max = 0 } = options
    let value: string = ELEMENT.value.trim()
  
    if (value === '') {
      showError(`err_${element}`, 'Le champ ne doit pas être vide!')
      return 1
    } else if (
      !(min === 0 && max === 0) &&
      (value.length < min || value.length > max)
    ) {
      showError(
        `err_${element}`,
        `La longueur du champ doit être entre ${min} et ${max} caractère(s)!`
      )
      return 1
    } else {
      clearError(`err_${element}`)
      return 0
    }
  }
  
  export  function validateNumField(element: string, options: { min?: number, max?: number } = {}): number {
    const ELEMENT: HTMLInputElement | null = document.getElementById(element) as HTMLInputElement
    const { min = 0, max = 0 } = options
    let value: string = ELEMENT.value.trim()
  
    if (value === '') {
      showError(`err_${element}`, `Le champ ne doit pas être vide!`)
      return 1
    } else if (isNaN(Number(value))) {
      showError(`err_${element}`, `Le champ doit être numérique!`)
      return 1
    } else if (!(min === 0 && max === 0) && (Number(value) < min || Number(value) > max)) {
      showError(`err_${element}`, `La valeur doit être entre ${min} et ${max}`)
      return 1
    } else {
      clearError(`err_${element}`)
      return 0
    }
  }

  export function validateMultipleSelect(element: string): number {
    const ELEMENT: HTMLSelectElement | null = document.getElementById(element) as HTMLSelectElement
    const selectedOptions: string[] = []
  
    for (const option of ELEMENT!.options) {
      if (option.selected) {
        selectedOptions.push(option.value)
      }
    }
  
    if (selectedOptions.length === 0) {
      showError(`err_${element}`, 'Vous devez choisir au moins une compétence!')
      return 1
    } else {
      clearError(`err_${element}`)
      return 0
    }
  }

  export  function showError(element: string, message: string): void {
    const ELEMENT: HTMLElement | null = document.getElementById(element)
    ELEMENT!.textContent = message
  }
  
export  function clearError(element: string): void {
    const ELEMENT: HTMLElement | null = document.getElementById(element)
    ELEMENT!.textContent = ''
  }