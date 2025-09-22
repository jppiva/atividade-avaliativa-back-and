import dados from "../models/dados.js";
const streamingTable = dados.streamingTable;

const getAllstreamingTable = (req, res) => {
    let resultado = streamingTable;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};

export { getAllstreamingTable }