import "dotenv/config"
import cowsay from "cowsay"

console.log(cowsay.say({
    text: `I am ${process.env.NAME} from ${process.env.CAMPUS}`,
}));