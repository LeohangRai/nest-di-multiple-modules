import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    compute(a: number, b: number) {
        this.powerService.supplyPower(a)
        console.log(`Drawing ${a} units of power from Power Service to perform the calculation.`);
        return a + b;
        
    }
}
