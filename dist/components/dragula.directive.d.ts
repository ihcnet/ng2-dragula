import { ElementRef, OnInit, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';
import { DragulaService } from './dragula.provider';
export declare class DragulaDirective implements OnInit, OnChanges, AfterViewInit {
    dragula: string;
    dragulaModel: any;
    dragulaOptions: any;
    protected container: any;
    private drake;
    private options;
    private el;
    private dragulaService;
    constructor(el: ElementRef, dragulaService: DragulaService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        dragulaModel?: SimpleChange;
    }): void;
    protected initialize(): void;
}
