#include <Python.h>
#include <stdio.h>

/**
 * print_python_list - Prints basic info about Python lists.
 * @p: A PyObject list object.
 */
void print_python_list(PyObject *p)
{
    Py_ssize_t size, i;
    PyObject *item;

    if (PyList_Check(p))
    {
        size = PyList_Size(p);
        printf("[*] Python list info\n");
        printf("[*] Size of the Python List = %ld\n", size);
        printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

        for (i = 0; i < size; i++)
        {
            item = PyList_GetItem(p, i);
            printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
        }
    }
    else
    {
        fprintf(stderr, "  [ERROR] Invalid List Object\n");
    }
}

/**
 * print_python_bytes - Prints basic info about Python bytes objects.
 * @p: A PyObject bytes object.
 */
void print_python_bytes(PyObject *p)
{
    Py_ssize_t size, i;
    char *data;

    if (PyBytes_Check(p))
    {
        size = PyBytes_Size(p);
        printf("[.] bytes object info\n");
        printf("  [.] Size: %ld\n", size);
        printf("  [.] Trying string: %s\n", PyBytes_AsString(p));

        if (size < 10)
        {
            printf("  [.] Length: %ld\n", size);
        }
        else
        {
            printf("  [.] Length: 10\n");
        }

        data = PyBytes_AsString(p);

        printf("  [.] Data: ");
        for (i = 0; i < size && i < 10; i++)
        {
            printf("%02hhx", data[i]);
            if (i < size - 1 && i < 9)
                printf(" ");
        }
        printf("\n");
    }
    else
    {
        fprintf(stderr, "  [ERROR] Invalid Bytes Object\n");
    }
}

/**
 * print_python_float - Prints basic info about Python float objects.
 * @p: A PyObject float object.
 */
void print_python_float(PyObject *p)
{
    if (PyFloat_Check(p))
    {
        printf("[.] float object info\n");
        printf("  [.] value: %.17g\n", PyFloat_AS_DOUBLE(p));
    }
    else
    {
        fprintf(stderr, "  [ERROR] Invalid Float Object\n");
    }
}
