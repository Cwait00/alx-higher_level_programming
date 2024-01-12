#!/usr/bin/python3
"""Start link class to table in database 
"""
import sys
from model_state import Base, State

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == "__main__":
    # Update these variables with your MySQL credentials and existing database name
    DB_USER = 'root'
    DB_PASSWORD = 'thenjiwe24'
    DB_NAME = sys.argv[3]  # Assuming the third argument is the database name
    DB_HOST = 'localhost'
    DB_PORT = 3306

    engine = create_engine(f'mysql+mysqldb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}', pool_pre_ping=True)
    Base.metadata.create_all(engine)

    # Create a session to interact with the database
    Session = sessionmaker(bind=engine)
    session = Session()

    # Example usage: adding a state to the states table
    new_state = State(name='New State')
    session.add(new_state)
    session.commit()

    # Close the session
    session.close()
