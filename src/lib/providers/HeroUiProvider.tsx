"use client";
import { HeroUIProvider } from "@heroui/react";
import {ToastProvider} from "@heroui/toast";

const HeroUiProvider : React.FC<{children:React.ReactNode}> = ({children})=>{
    return (
        <HeroUIProvider>
            <ToastProvider/>
            {children}
        </HeroUIProvider>
    )
}

export default HeroUiProvider;