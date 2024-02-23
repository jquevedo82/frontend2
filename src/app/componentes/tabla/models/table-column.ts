export interface TableColumn {
    label: string;
    def: string;
    dataKey: string;
    format?: string; // si es date definir tipo de format
    dataType?: 'date' | 'object'; //tipo de dato que esta procesoado
}
