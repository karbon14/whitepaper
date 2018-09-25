import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    marginBottom: '6px',
  },
  title: {
    fontFamily: 'Titillium Web',
    fontSize: '22px',
    fontWeight: 'bold',
    letterSpacing: '0.9px',
    color: '#23b2c6',
    margin: 0,
    textDecoration: 'none',
  },
  list: {
    marginLeft: '36px',
    marginTop: '6px',
    marginBottom: '16px',
  },
  item: {
    listStyle: 'none',
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '19px',
    fontWeight: 300,
    lineHeight: '0px',
    letterSpacing: '1px',
    color: '#FFF',
  },
}

export const List = ({ title = [], items = [] }) => (
  <div style={styles.container}>
    <a href={title[1]} style={styles.title}>
      {title[0]}
    </a>
    {items.length ? (
      <ul style={styles.list}>
        {items.map((item, key) => (
          <li style={styles.item} key={key}>
            <a href={item[1]} style={styles.link}>
              {item[0]}
            </a>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
)

List.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
}
