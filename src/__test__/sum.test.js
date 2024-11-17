import {sum} from "../components/Sum"


test("it shouldcalculate sum of two numbers",()=>{
    const result=sum(4,5);
    expect(result).toBe(9);
})