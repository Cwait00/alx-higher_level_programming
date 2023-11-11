# YourClass.py

class YourClass:
    def add(self, a, b):
        return a + b

# test_YourClass.py

import unittest
from YourClass import YourClass

class TestYourClass(unittest.TestCase):
    def test_add(self):
        obj = YourClass()
        result = obj.add(3, 5)
        self.assertEqual(result, 8)

if __name__ == '__main__':
    unittest.main()
