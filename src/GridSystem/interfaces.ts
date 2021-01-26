export interface Image {
    url: string;
    width: number;
    height: number;
  }
  
  export interface ProcessedImage {
    url: string;
    width: number;
    height: number;
    rowOffset: number;
    left: number;
    top: number;
    originalData: Image;
  }
  
  export interface Props {
    images: Image[];
    gutter?: number;
    rows?: number | undefined;
    maxRowHeight?: number;
    width?: number;
    style?: any;
    showIncompleteRow?: boolean;
    children?: (imageList: ProcessedImage[]) => React.ReactNode;
  }
  
  export interface DefaultProps {
    gutter: number;
    rows: number | undefined;
    maxRowHeight: number;
    style: any;
    showIncompleteRow: boolean;
  }
  
  export interface State {
    images: ProcessedImage[];
    gridHeight: number;
  }
  
  export type PropsWithDefaults = Props & DefaultProps;