import {EventMetadata, FunctionMetadata, PropertyMetadata, TagMetadata} from "@/views/device/Product/typings";

export type Footer = {
    title: string;
    value: number | string;
    status?: "default" | "error" | "success" | "warning" | "processing"
}

export type DeviceQueryData = {
    deviceId: string;
    time: string;
    properties: array<>;
    rangeTime: string;
    countSize: integer;
};