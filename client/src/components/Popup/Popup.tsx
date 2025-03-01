import { useState } from 'react'
import { X as XIcon } from 'react-feather'
import { Row, Col, Title } from '..'
import { SPopupWrapper, SPopupCloser, SPopup, SPopupHeader, SPopupHeaderContent, SPopupContent, SPopupFooter, SPopupCloseButton } from './Popup.styled'

export const Popup = ({ children, header, actions, onClose }) => {
  const [isOpen, setIsOpen] = useState(true)

  const onCloseHandler = () => {
    if (onClose) {
      setIsOpen(false)
      onClose()
    }
  }

  return isOpen
    ? (
    <SPopupWrapper>
      <SPopupCloser onClick={onCloseHandler} />
      <SPopup>
        {header
          ? (<SPopupHeader>
            <SPopupHeaderContent>
              <Title as="h4">{header}</Title>
            </SPopupHeaderContent>
            <SPopupCloseButton
              onClick={onCloseHandler}
            >
              <XIcon />
            </SPopupCloseButton>
          </SPopupHeader>
            )
          : null}
        <SPopupContent>
          {children}
        </SPopupContent>
        {actions?.length
          ? (
          <SPopupFooter>
            <Row gutter="s" s={{ flexWrap: 'nowrap' }}>
              { actions.map((action, index: number) => (
                <Col key={`action-${index}`} width={`${100 / actions.length}`} onClick={onCloseHandler}>
                  {action}
                </Col>
              )) }
            </Row>
          </SPopupFooter>
            )
          : null}
      </SPopup>
    </SPopupWrapper>
      )
    : null
}

Popup.displayName = 'Popup'
