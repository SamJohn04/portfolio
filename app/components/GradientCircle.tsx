import { motion } from 'framer-motion';

export default function GradientCircle({ children, title }: { children?: React.ReactNode | React.ReactNode[], title: string }) {
    return (
        <motion.div id = {`tech-${title}`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="gradient-circle group box-content w-12 h-12 md:w-24 md:h-24 relative flex flex-col justify-center items-center p-4 rounded-full border-2 border-border transition-all duration-[400ms] bg-background hover:bg-primary active:bg-primary hover:scale-105 focus:scale-105">
            {children ?? ''}
        </motion.div>
    )
}