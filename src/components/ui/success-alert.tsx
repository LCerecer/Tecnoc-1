import { Alert } from "@/components/ui/alert"
import { CircleCheck } from "lucide-react"
import { motion } from "framer-motion"

export function SuccessAlert({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Alert
        variant="success"
        layout="row"
        icon={
          <CircleCheck className="text-emerald-500" size={16} strokeWidth={2} />
        }
      >
        <p className="text-sm text-emerald-600">{message}</p>
      </Alert>
    </motion.div>
  )
}