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
    marginBottom: '10px',
  },
  description: {
    fontFamily: 'Titillium Web',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#4a4a4a',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: 1.38,
    letterSpacing: '1px',
    color: '#4a4a4a',
  },
}

export const ListName = ({ items = [] }) => (
  <div style={styles.container}>
    {items.length ? (
      <ol style={styles.list}>
        {items.map((item, key) => (
          <li style={styles.item} key={key}>
            <p style={styles.text}>
              <span style={styles.description}>
                {item[0]}
                {item[1] ? ':' : ''}
              </span>{' '}
              {item[1]}
            </p>
          </li>
        ))}
      </ol>
    ) : null}
  </div>
)

ListName.propTypes = {
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
}
