import { GasServices } from "./services/gas";

global.main = async () => {
    const gas = new GasServices();
    const ids = await gas.listId();
    console.log(ids);
}
