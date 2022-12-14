/**
 *
 * @param label: String
 * @param className: String
 *
 */

import { If } from 'components/shared'

import { Box } from './styles'

export default function ContainerBox({ children, label, className }) {
  return (
    <Box {...{ className }}>
      <If condition={label}>
        <p className='font-light mb-4 mt-8 pl-2 md:pl-0'>{label}</p>
      </If>
      <div className='bg-white p-8 flex-1'>{children}</div>
    </Box>
  )
}
