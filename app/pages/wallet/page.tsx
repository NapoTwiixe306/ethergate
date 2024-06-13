import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

{/*
    'use client'
    import {
        useWeb3ModalTheme,
        createWeb3Modal,
        defaultConfig,
    } from 'web3modal-web3js/react';

// 1. Get projectId at https://cloud.walletconnect.com
    const projectId = '76804fd6127cc3b85f7d749c4e53700f';

// 2. Set chains
    const chains = [
        {
            chainId: 1,
            name: 'Ethereum',
            currency: 'ETH',
            explorerUrl: 'https://etherscan.io',
            rpcUrl: 'https://cloudflare-eth.com',
        },
        {
            chainId: 42161,
            name: 'Arbitrum',
            currency: 'ETH',
            explorerUrl: 'https://arbiscan.io',
            rpcUrl: 'https://arb1.arbitrum.io/rpc',
        },
    ];

    const web3Config = defaultConfig({
        metadata: {
            name: 'Web3Modal',
            description: 'Web3Modal Laboratory',
            url: 'https://web3modal.com',
            icons: ['https://avatars.githubusercontent.com/u/37784886'],
        },
        defaultChainId: 1,
        rpcUrl: 'https://cloudflare-eth.com',
    });

// 3. Create modal
    createWeb3Modal({
        web3Config,
        chains,
        projectId,
        enableAnalytics: true,
        themeMode: 'light',

    });

    export default function page() {
        const {themeMode, setThemeMode} = useWeb3ModalTheme();

        return (
            <>
                <w3m-button/>
                <w3m-network-button/>
                <w3m-account-button/>

            </>
        );
    }
*/}

