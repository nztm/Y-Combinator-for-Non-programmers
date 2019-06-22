import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/nfkp.json'

// @ts-ignore
const Nfkp = () => <ExpressionRunnerPrecomputed {...config} />

export default Nfkp