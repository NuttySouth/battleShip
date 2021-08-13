
import {shipFactory} from "./Ship"

it("Test create ship", ()=>{

    const testShip = shipFactory(6);

    expect(testShip).not.toBe(undefined);
})