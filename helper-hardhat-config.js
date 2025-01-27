const networkConfig = {
    // 31337: {
    //     name: "localhost"
    // },
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    },

    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945"
    }
}
const developmentChains = ["hardhat", "localhost"]
const DECIMAL = 8
const INITIAL_ANSWER = 200000000000
module.exports = { networkConfig, developmentChains, DECIMAL, INITIAL_ANSWER }
