import ts from 'typescript'

/**
 * The JSON data model generated by a-javascript-and-typescript-documentation-generator-based-on-typescript-compiler.
 */
export interface Model {
  /**
   * Symbol IDs for the specified entry modules.
   */
  entryModules: string[]
  /**
   * Source file IDs for the specified entry files.
   */
  entrySourceFiles: string[]
  /**
   * Collected source files
   */
  sourceFiles: SourceFileData[]
  /**
   * The collected symbol.
   */
  symbols: SymbolData[]
}

export interface SourceFileData {
  id: string
  fileName: string
}

export interface SymbolData {
  /**
   * The symbol’s ID. Do not assume this ID to be stable.
   */
  id: string
  /**
   * Name of the symbol.
   */
  name: string
  /**
   * Symbol flags.
   */
  flags: string[]
  /**
   * Contents of the documentation comment.
   */
  documentationComment: ts.SymbolDisplayPart[]
  /**
   * JSDoc tags.
   */
  jsDocTags: ts.JSDocTagInfo[]
  /**
   * For modules: Exported symbols.
   */
  exports?: NamedSymbolInfo[]
  /**
   * Where the symbol is declared.
   */
  declarations?: DeclarationInfo[]
  /**
   * The type of the variable or instance.
   */
  type?: TypeInfo
  /**
   * The type of class.
   */
  static?: TypeInfo
}

export interface NamedSymbolInfo {
  name: string
  symbol: string
}

export interface TypeInfo {
  parts: TypeLinkPart[]
  flags: string[]
  callSignatures?: SignatureInfo[]
  constructSignatures?: SignatureInfo[]
  properties?: PropertyInfo[]
}

export type TypeLinkPart = string | [string, string]

export interface PropertyInfo extends NamedSymbolInfo {
  inherited: boolean
  // TODO: optional
}

export interface ParameterInfo extends NamedSymbolInfo {
  // TODO: optional
}

export interface SignatureInfo {
  declaration?: DeclarationInfo
  documentationComment: ts.SymbolDisplayPart[]
  jsDocTags: ts.JSDocTagInfo[]
  parameters: ParameterInfo[]
  returnType: TypeInfo
}

export interface DeclarationInfo {
  line: number
  character: number
  position: number
  sourceFile: string
}
