export default function If({ children, condition }) {
  if (!condition) return null
  return <>{children}</>
}
