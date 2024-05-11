export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function slugify(value: string, separator: string): string {
  return value && this.toLowerCase(value.trim())
    .replace(/[^a-z0-9\-_]/g, ' ')
    .trim()
    .replace(/[\-_\s]+/g, separator);
}

export function toCamelCase(value: string): string {
  return value && value.split(/[\-_\s]+/g)
    .filter(word => !!word)
    .map((word, index) => {
      return index === 0 ?
        toLowerCase(word) :
        toSentenceCase(word);
    })
    .join('');
}

export function toLowerCase(value: string): string {
  return value && value.toLowerCase();
}

export function toPascalCase(value: string): string {
  return value && value.split(/[\-_\s]+/g)
    .filter(word => !!word)
    .map((word) => toSentenceCase(word))
    .join('');
}

export function toSentenceCase(value: string): string {
  return value && this.toUpperCase(this.charAt(value)) + this.toLowerCase(value.substr(1));
}

export function toTitleCase(value: string, separator: string, exclusions?: string[]): string {
  return value && value.split(separator)
    .map((word, index) => {
      return index > 0 && exclusions && exclusions.includes(word.toLowerCase()) ?
        word.toLowerCase() :
        toSentenceCase(word);
      })
    .join(separator);
}

export function toUpperCase(value: string): string {
  return value && value.toUpperCase();
}
