// The source range.
// The `start` is inclusive and `end` is exclusive.
// [start, end)
export interface SourceLocation {
  start: Position
  end: Position
  source?: string
}

export interface Position {
  offset: number // from start of content (file)
  line: number
  column: number
}

export function createPosition(
  line: number,
  column: number,
  offset: number
): Position {
  return { line, column, offset } as Position
}

export function createLocation(
  start: Position,
  end: Position,
  source?: string
): SourceLocation {
  const loc = { start, end } as SourceLocation
  if (source != null) {
    loc.source = source
  }
  return loc
}
