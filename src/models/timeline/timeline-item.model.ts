import Streetcode from "models/streetcode/streetcode-types.model";
import HistoricalContext from "./historical-context.model";

export interface TimelineItem {
    id: number;
    date: Date;
    title: string;
    description?: string | undefined;
    streetcodes: Streetcode[];
    historicalContexts: HistoricalContext[];
}

export interface Timeline {
    items: TimelineItem[];
}