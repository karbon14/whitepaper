import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    marginBottom: '6px',
  },
  list: {
    margin: 0,
  },
  item: {
    listStyle: 'none',
    marginBottom: '1px',
  },
  number: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: 1.38,
    letterSpacing: '1px',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
}

export const ListItems = ({ children = [] }) => (
  <div style={styles.container}>
    {children.length ? (
      <ol style={styles.list}>
        {children.map((item, key) => (
          <li style={styles.item} key={key}>
            <p style={styles.text}>
              <span style={styles.number}>{key + 1}.</span> {item}
            </p>
          </li>
        ))}
      </ol>
    ) : null}
  </div>
)

ListItems.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
}
